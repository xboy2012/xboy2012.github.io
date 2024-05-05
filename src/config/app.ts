import { userData } from '../data';

export const APP_DEFAULT_TITLE = userData.name;
export const APP_TITLE_TEMPLATE = `%s - ${userData.name}`;
export const APP_DESCRIPTION = userData.intro.join('');
