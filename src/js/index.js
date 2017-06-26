console.log('Hello, github');

import isIOS from './utils/isIOS';
import {add} from './bouncefix/bouncefix';


if(isIOS())
    add('main');