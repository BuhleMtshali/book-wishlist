//toggling dark mode
const toggleBtn = document.querySelector('.dark-icon');
const themeWrapper = document.querySelector('#theme-wrapper');
const containerElement = document.querySelector('.container');
const bodyElement = document.getElementById('body')

themeWrapper.addEventListener('click', () => {
    // containerElement.classList.toggle('light-mode')
    bodyElement.classList.toggle('light-mode')
})


//function for showing the modal window
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelector('.add-book');

//event listeners
showModal.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden')
})

btnCloseModal.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden')
})