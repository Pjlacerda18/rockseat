const buttonOpenModal = document.getElementById('openmodal');

const modalwrapper = document.querySelector('.modalwrapper')

buttonOpenModal.onclick = function() {
    modalwrapper
        .classList
        .remove("invisible")
}


document.addEventListener('keydown', function(event) {
    const isEsckey = event.key === "Escape"

    if (isEsckey) { modalwrapper.classList.add("invisible") }
})