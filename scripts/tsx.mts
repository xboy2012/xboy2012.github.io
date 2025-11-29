import { registerHooks } from 'node:module';
import { readFileSync, statSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const isRelative = (specifier: string) =>
  specifier.startsWith('./') || specifier.startsWith('../');

const isFile = (path: string) => {
  try {
    if (statSync(path).isFile()) {
      return true;
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }
  return false;
};

const tryResolve = (path: string) => (isFile(path) ? path : undefined);

const locateTsFile = (pathPrefix: string) => {
  return (
    tryResolve(pathPrefix + '.ts') ||
    tryResolve(pathPrefix + '.mts') ||
    tryResolve(join(pathPrefix, 'index.ts')) ||
    tryResolve(join(pathPrefix, 'index.mts'))
  );
};

const isTsFile = (path: string) => {
  const extension = extname(path);
  return extension === '.ts' || extension === '.mts';
};

const resolveEntryFile = () => {
  const entry = process.argv[2];
  if (!entry) {
    return;
  }
  const pathPrefix = join(process.cwd(), entry);
  if (isTsFile(pathPrefix) && statSync(pathPrefix).isFile()) {
    return pathPrefix;
  }
  return locateTsFile(pathPrefix);
};

const main = () => {
  registerHooks({
    resolve(specifier, context, nextResolve) {
      const { parentURL } = context;
      if (isRelative(specifier) && parentURL && !extname(specifier)) {
        const parentDir = dirname(new URL(parentURL).pathname);
        const pathPrefix = join(parentDir, specifier);
        const resolvedPath = locateTsFile(pathPrefix);
        if (resolvedPath) {
          return {
            url: pathToFileURL(resolvedPath).href,
            shortCircuit: true,
            format: 'module-typescript',
          };
        }
      }

      return nextResolve(specifier, context);
    },
    load(url, context, nextLoad) {
      const extension = extname(url);
      if (extension === '.ts' || extension === '.mts') {
        // console.log(url);
        const path = fileURLToPath(url);
        const code = readFileSync(path, 'utf8');
        return {
          format: 'module-typescript',
          shortCircuit: true,
          source: code,
        };
      }
      return nextLoad(url, context);
    },
  });

  const entry = resolveEntryFile();

  if (!entry) {
    console.error('Usage: node tsx.ts <entry.ts>');
    // eslint-disable-next-line unicorn/no-process-exit -- intended usage
    process.exit(1);
  }

  import(entry);
};

main();
