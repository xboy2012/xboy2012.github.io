let _isIOS;

/**
 *
 * @returns {boolean}
 */
export default () => {
    if(_isIOS == null) {
        _isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
    return _isIOS;
};