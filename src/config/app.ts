/* istanbul ignore file */

import { userData } from '../data';

export const APP_DEFAULT_TITLE = /* @__PURE__ */ userData.name;
export const APP_TITLE_TEMPLATE = /* @__PURE__ */ `%s - ${userData.name}`;
export const APP_DESCRIPTION = /* @__PURE__ */ userData.intro[0];

export const BASE_DOMAIN =
  process.env.NODE_ENV === 'production'
    ? 'xboy2012.github.io'
    : 'localhost:3000';

export const BASE_URL = /* @__PURE__ */ `https://${BASE_DOMAIN}`;
