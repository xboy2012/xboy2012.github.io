import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdir, rm } from 'node:fs/promises';

export interface TemporaryDirectoryHandle {
  dir: string;
  setup: () => Promise<void>;
  dispose: () => Promise<void>;
}

let index = 0;

export const createTemporaryDir = (): TemporaryDirectoryHandle => {
  index++;
  const subDir = `${index}_${(Math.random() * 100000000).toFixed(0)}`;
  const dir = join(tmpdir(), subDir);

  const setup = async () => {
    await rm(dir, { force: true, recursive: true });
    await mkdir(dir, { recursive: true });
  };

  const dispose = async () => {
    await rm(dir, { force: true, recursive: true });
  };

  return { dir, setup, dispose };
};
