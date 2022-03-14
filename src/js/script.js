window.addEventListener('load', initApp);

function initApp() {
    const lst_exos = document.querySelectorAll('.box');
    lst_exos.forEach(elem => {
        elem.addEventListener('click', isCheck)
    })
}

function isCheck() {
    if (this.classList.contains('checked')) {
        this.classList.remove('checked');
    } else {
        this.classList.add('checked');
    }
}