window.addEventListener('load', initApp);

var nb_checked = 0;

function initApp() {
    const lst_exos = document.querySelectorAll('.box');
    lst_exos.forEach(elem => {
        elem.addEventListener('click', isCheck)
    })
    document.getElementById('nb_exos').textContent = nb_checked;
}

function isCheck() {
    if (this.classList.contains('checked')) {
        this.classList.remove('checked');
        this.children[2].classList.remove('checked');
        if (nb_checked > 0) {
            nb_checked -= 1;
        }
        document.getElementById('nb_exos').textContent = nb_checked;
    } else {
        this.classList.add('checked');
        this.children[2].classList.add('checked');
        nb_checked += 1;
        document.getElementById('nb_exos').textContent = nb_checked;
    }
}