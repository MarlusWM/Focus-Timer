
const btnMode = document.querySelector('.btnDarkMode');

btnMode.addEventListener('click', ()=> {
    document.documentElement.classList.toggle('light');
})