//
// Search nodes to find target el. Return if exists
//
const getTargetedEl = function (el, className) {
    do {
        if (el.classList.contains(className))
            return el;
        el = el.parentElement;
    } while (el);
    return null;
};
//
// Keep scrool from hitting end bounds
//
const scrollToEnd = function (el) {
    let curPos = el.scrollTop, height = el.offsetHeight, scroll = el.scrollHeight;
    // If at top, bump down 1px
    if (curPos <= 0) {
        el.scrollTop = 1;
    } else
    // If at bottom, bump up 1px
    if (curPos + height >= scroll) {
        el.scrollTop = scroll - height - 1;
    }
};


const preventDefault = function(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};

const addEventListener = function(el, eventName, fn) {
    el.addEventListener(eventName, fn, false);
};

const removeEventListener = function(el, eventName, fn) {
    el.removeEventListener(eventName, fn);
};

export default (className) => {

    let el;

    let touching = false;   //正在处理一个滑动，忽略其他滑动
    let moveBound = false;  //是否绑定了move事件

    let onTouchMove = (event) => {
        preventDefault(event);
    };

    let onTouchStart = (event) => {

        //有其他触摸动作正在处理，其余触摸动作被忽略，防止交叉操作冲突
        if(touching)
            return preventDefault(event);
        touching = true;

        el = getTargetedEl(event.target, className);

        //可以滚动，防止容器滚动到顶部或底部
        if (el && el.scrollHeight > el.offsetHeight)
            return scrollToEnd(el);
        if (el && !moveBound) {
            addEventListener(el, 'touchmove', onTouchMove);
            moveBound = true;
        }
    };
    let onTouchEnd = (event) => {
        if(!touching)
            return preventDefault(event);
        touching = false;
        if (moveBound) {
            removeEventListener(el, 'touchmove', onTouchMove);
            moveBound = false;
        }
    };

    addEventListener(document, 'touchstart', onTouchStart);
    addEventListener(document, 'touchend', onTouchEnd);
    addEventListener(document, 'touchcancel', onTouchEnd);
}