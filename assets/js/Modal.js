import { Element } from "./Element.js";

export class Modal extends Element{
    /**
     * Modal constructor
     *
     * @param el
     */
    constructor(el) {
        super(el)
        this.overlayEl = this.el.querySelector('.modal-overlay')
        this.loadingEl = this.el.querySelector('.modal-content .loading')
        this.contentEl = this.el.querySelector('.modal-content .content')
        this.loading = false
        this.onOpenHandlers = []
        this.onCloseHandlers = []

        this.overlayEl.addEventListener('click', () => this.close())
    }

    /**
     * Open the modal.
     *
     * @returns {Modal}
     */
    open() {
        this.el.focus()
        this.el.classList.add('active')
        this.onOpenHandlers.forEach((handler) => {
            handler(this)
        })

        return this
    }

    /**
     * Close the modal
     *
     * @returns {Modal}
     */
    close() {
        this.el.classList.remove('active')
        this.onCloseHandlers.forEach((handler) => {
            handler(this)
        })

        return this
    }

    /**
     * Push handler to onOpenHandlers.
     * Will execute on the open method execution
     *
     * @param handler
     * @returns {Modal}
     */
    pushOnOpenHandler(handler) {
        this.validateHandler(handler)

        this.onOpenHandlers.push(handler)

        return this
    }

    /**
     * Push handler to onCloseHandlers,
     * Will execute on the close method execution.
     *
     * @param handler
     * @returns {Modal}
     */
    pushOnCloseHandler(handler) {
        this.validateHandler(handler)

        this.onCloseHandlers.push(handler)

        return this
    }

    /**
     * Checks if an handler is valid.
     *
     * @param handler
     */
    validateHandler(handler) {
        if (typeof handler !== 'function') {
            throw new Error('Handler must be valid function')
        }
    }

    /**
     * Set or unset loading state to the modal
     *
     * @param value
     * @returns {Modal}
     */
    setLoading(value) {
        value = !!value

        this.contentEl.classList[value ? 'remove' : 'add']('active')
        this.loadingEl.classList[value ? 'add' : 'remove']('active')

        this.loading = value

        return this
    }

    /**
     * Checks if the modal is in loading state
     *
     * @returns {boolean}
     */
    isLoading() {
        return this.loading
    }
}