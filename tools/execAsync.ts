import { spawn } from 'node:child_process';
import { getRootDir } from '../src/utils/getRootDir';
import { getEnvWithNodePath } from '../src/utils/getEnvWithNodePath';

export const execAsync = (command: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, {
      stdio: 'inherit',
      shell: true,
      cwd: getRootDir(),
      env: getEnvWithNodePath(),
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Exit with code ${code}`));
      }
    });
  });
};
