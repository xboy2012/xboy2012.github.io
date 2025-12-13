import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { recommended } from './custom/configs/recommended';

export const getCustomConfig = (): ConfigWithExtendsArray => {
  return [recommended];
};
