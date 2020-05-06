const MODAL_OPENED_EVENT_NAME = 'modal-opened'
const MODAL_CLOSED_EVENT_NAME = 'modal-closed'

/**
 * Main modal logic
 *
 * @param event
 */
const fetchMainModalData = (event) => {
    const modalEl = event.target
    const loadingEl = modalEl.querySelector('.modal-content .loading')
    const contentEl = modalEl.querySelector('.modal-content .content')

    contentEl.classList.remove('active')
    loadingEl.classList.add('active')

    fetch('data.php', { method: 'GET' })
        .then((response) => response.json())
        .then(jsonResponse => contentEl.innerHTML = jsonResponse.data)
        .catch(() => contentEl.innerHTML = 'Something went wrong, please try again.')
        .finally(() => {
            loadingEl.classList.remove('active')
            contentEl.classList.add('active')
        })
}

/**
 * open any modal on the page
 *
 * @param event
 */
const openModal = (event) => {
    const modalId = event.target.getAttribute('data-open-modal')
    const modalEl = document.getElementById(modalId)

    if (modalEl === null) {
        throw new Error(`Modal with the id '${modalId}' was not founded.`)
    }


    modalEl.focus()
    modalEl.classList.add('active')
    modalEl.querySelector('.modal-overlay').addEventListener('click', closeModal)
    modalEl.dispatchEvent(new CustomEvent(MODAL_OPENED_EVENT_NAME, {target: modalEl}))
}

/**
 * close any modal on the page
 *
 * @param event
 */
const closeModal = (event) => {
    event.target.removeEventListener('click', closeModal)

    const modalEl = event.target.parentElement

    modalEl.classList.remove('active')
    modalEl.dispatchEvent(new CustomEvent(MODAL_CLOSED_EVENT_NAME, {target: modalEl}))
}

/**
 * This is the main function that run on page ready.
 */
const main = () => {
    document
        .querySelectorAll('[data-open-modal]')
        .forEach(el => {
            el.addEventListener('click', openModal)
        })

    document
        .querySelector('#mainModal')
        .addEventListener(MODAL_OPENED_EVENT_NAME, fetchMainModalData)
}

document.addEventListener('DOMContentLoaded', main)

