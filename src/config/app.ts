/* istanbul ignore file */

import { userData } from '../data';

export const APP_DEFAULT_TITLE = /* @__PURE__ */ userData.name;
export const APP_TITLE_TEMPLATE = /* @__PURE__ */ `%s - ${userData.name}`;
export const APP_DESCRIPTION = /* @__PURE__ */ userData.intro.join('');

export const BASE_DOMAIN = 'xboy2012.github.io';

export const BASE_URL = `https://${BASE_DOMAIN}`;
