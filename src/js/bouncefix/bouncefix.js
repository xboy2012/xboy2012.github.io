// ----------------------------------------------------------------------------
// DOMEvent
//
// Convenient class used to work with addEventListener.
// ----------------------------------------------------------------------------
function DOMEvent(el, eventName, handler, context) {
    // Make args available to instance
    this.el = el;
    this.eventName = eventName;
    this.handler = handler;
    this.context = context;
    // Attach
    this.add();
}


function stopPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

function preventDefault(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}
//
// Handler that manages context, and normalizes both
// preventDefault and stopPropagation.
//
DOMEvent.prototype._handler = function (e, context) {
    // Copy props to new evt object. This is shallow.
    // Only done so that I can modify stopPropagation
    // and preventDefault.
    // Call with context and modified evt.
    this.handler.call(this.context || context, e);
};
//
// Add the `EventListener`. This method is called internally in
// the constructor. It can also be used to re-attach a listener
// that was previously removed.
//
DOMEvent.prototype.add = function () {
    // Cache this
    var self = this;
    // Cache handler so it can be removed.
    self.cachedHandler = function (e) {
        self._handler.call(self, e, this);
    };
    // Modified handler
    self.el.addEventListener(self.eventName, self.cachedHandler, false);
};
//
// Remove the `EventListener`
//
DOMEvent.prototype.remove = function () {
    this.el.removeEventListener(this.eventName, this.cachedHandler);
};

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
    var curPos = el.scrollTop, height = el.offsetHeight, scroll = el.scrollHeight;
    // If at top, bump down 1px
    if (curPos <= 0) {
        el.scrollTop = 1;
    } else
    // If at bottom, bump up 1px
    if (curPos + height >= scroll) {
        el.scrollTop = scroll - height - 1;
    }
};

const Fix = function (className) {
    // Add className to instance
    this.className = className;
    // On touchstart check for block. On end, cleanup
    this.startListener = new DOMEvent(document, 'touchstart', this.touchStart, this);
    this.endListener = new DOMEvent(document, 'touchend', this.touchEnd, this);
};
//
// touchstart handler
//
Fix.prototype.touchStart = function (evt) {
    // Get target
    var el = getTargetedEl(evt.target, this.className);
    // If el scrollable
    if (el && el.scrollHeight > el.offsetHeight) {
        return scrollToEnd(el);
    }
    // Else block touchmove
    if (el && !this.moveListener) {
        this.moveListener = new DOMEvent(el, 'touchmove', this.touchMove, this);
    }
};
//
// If this event is called, we block scrolling
// by preventing default behavior.
//
Fix.prototype.touchMove = function (evt) {
    preventDefault(evt);
};
//
// On touchend we need to remove and listeners
// we may have added.
//
Fix.prototype.touchEnd = function (evt) {
    if (this.moveListener) {
        this.moveListener.remove();
        delete this.moveListener;
    }
};
//
// touchend handler
//
Fix.prototype.remove = function () {
    this.startListener.remove();
    this.endListener.remove();
};

var cache = {};
//
// Add/Create new instance
//
export const add = (className) => {
    if (!cache[className]) {
        cache[className] = new Fix(className);
    }
};
//
// Delete/Remove instance
//
export const remove = (className) => {
    if (cache[className]) {
        cache[className].remove();
        delete cache[className];
    }
};