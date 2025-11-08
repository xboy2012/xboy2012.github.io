import { execSync } from 'node:child_process';

export const nextBuild = async () => {
  execSync('yarn next build', { stdio: 'inherit' });
};
