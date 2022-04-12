import { createFooter } from "../../src/js/footer.js";
window.addEventListener('load', initApp);

var nb_checked = 0;
var seance = [];

function initApp() {
    createFooter();
    const lst_exos = document.querySelectorAll('.box');
    const start_btn = document.getElementById('start');
    lst_exos.forEach(function(elem, index) {
        elem.addEventListener('click', function() {
            isCheck(this, index);
        })
    })
    document.getElementById('nb_exos').textContent = nb_checked;
    start_btn.addEventListener('click', function(event) {
        saveToStorage(event);
    });
}

function isCheck(elem, index) {
    if (elem.classList.contains('checked')) {
        elem.classList.remove('checked');
        elem.children[2].classList.remove('checked');
        if (nb_checked > 0) {
            nb_checked -= 1;
            seance.forEach(function(elem, i) {
                if (elem.id === index) {
                    seance.splice(i, 1);
                    localStorage.removeItem('exos' + index);
                }
            })
        }
        document.getElementById('nb_exos').textContent = nb_checked;
    } else {
        elem.classList.add('checked');
        elem.children[2].classList.add('checked');
        nb_checked += 1;
        document.getElementById('nb_exos').textContent = nb_checked;
        let exercice = {
            id: index,
            name: elem.children[1].textContent
        };
        seance.push(exercice);
    }
}

function saveToStorage(event) {
    localStorage.clear();
    if (seance.length === 0) {
        event.preventDefault();
        alert('Vous devez au moins choisir un exercice.')
    } else {
        seance.forEach(function(elem, index) {
            localStorage.setItem('exos' + index, JSON.stringify(elem));
        })
    }
}