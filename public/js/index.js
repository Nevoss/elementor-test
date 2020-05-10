import { Modal } from "./Modal.js";
import { Button } from "./Button.js";

/**
 * the fetch method is outside the scope of the Modal class.
 *
 * @param modal
 */
const fetchMainModalData = (modal) => {
    modal.setLoading(true)

    fetch('data.php', { method: 'GET' })
        .then((response) => response.json())
        .then(jsonResponse => modal.contentEl.innerHTML = jsonResponse.data)
        .catch(() => modal.contentEl.innerHTML = 'Something went wrong, please try again.')
        .finally(() => {
            modal.setLoading(false)
        })
}

/**
 * This is the main function that run on page ready.
 */
const main = () => {
    const mainModal = new Modal(document.getElementById('mainModal'))
        .pushOnOpenHandler(fetchMainModalData);

    new Button(document.getElementById('mainBtn'))
        .bindListener('click', () => mainModal.open())
}

document.addEventListener('DOMContentLoaded', main)

