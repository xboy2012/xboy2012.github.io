/* istanbul ignore file */

import { userData } from '../data';

export const APP_DEFAULT_TITLE = /* @__PURE__ */ `${userData.name} - ${userData.title}`;
export const APP_TITLE_TEMPLATE = /* @__PURE__ */ `%s - ${userData.name}`;
export const APP_DESCRIPTION = /* @__PURE__ */ userData.intro[0];

export const PROD_DOMAIN = 'xboy2012.github.io';

export const PROD_BASE_URL = /* @__PURE__ */ `https://${PROD_DOMAIN}`;

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? PROD_BASE_URL
    : 'http://localhost:3000';
