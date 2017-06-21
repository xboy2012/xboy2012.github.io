console.log('Hello, github');

import isIOS from './utils/isIOS';
import iNoBounce from 'inobounce';

if(isIOS())
    iNoBounce.enable();

alert(1);