/**
 * Basic class Element
 */
export class Element {
    /**
     * Element Constructor
     *
     * @param el
     */
    constructor(el) {
        this.el = el
    }

    /**
     * abstraction over addEventListener native method
     * just to make the event listener binding more convenient.
     *
     * @param eventName
     * @param handler
     * @returns {Element}
     */
    bindListener(eventName, handler) {
        this.el.addEventListener(eventName, handler)

        return this
    }
}