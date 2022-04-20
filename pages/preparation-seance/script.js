import { mobileMenu } from "../../src/js/menu.js";
import { createFooter } from "../../src/js/footer.js";
window.addEventListener('load', initApp);

var nb_checked = 0;
var seance = [];

function initApp() {
    mobileMenu();
    localStorage.clear();
    let difficulty_data = {
        type: 'easy',
        series: 3
    }
    localStorage.setItem('difficulty', JSON.stringify(difficulty_data));
    console.log(localStorage);
    createFooter();
    const lst_exos = document.querySelectorAll('.box');
    const lst_emojis = [];
    document.querySelectorAll('.emojis').forEach(elem => {
        lst_emojis.push(elem);
    })
    const start_btn = document.getElementById('start');
    lst_exos.forEach(function(elem, index) {
        elem.addEventListener('click', function() {
            isActCheck(this, index);
        })
    })
    lst_emojis.forEach(function(elem, index) {
        elem.addEventListener('click', function() {
            isEmojisCheck(lst_emojis, index);
        })
    })
    document.getElementById('nb_exos').textContent = nb_checked;
    start_btn.addEventListener('click', function(event) {
        saveToStorage(event);
    });
}

function isActCheck(elem, index) {
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
    if (seance.length === 0) {
        event.preventDefault();
        alert('Vous devez au moins choisir un exercice.')
    } else {
        seance.forEach(function(elem, index) {
            localStorage.setItem('exos' + index, JSON.stringify(elem));
        })
    }
}

function isEmojisCheck(lst, index) {
    let series = 3;
    for (let key in lst) {
        if (key == index) {
            if (!lst[key].classList.contains('checked')) {
                if (lst[key].id === "easy") {
                    series = 3;
                } else if (lst[key].id === "medium") {
                    series = 6;
                } else {
                    series = 8;
                }
                let difficulty_data = {
                    type: lst[key].id,
                    series: series
                }
                lst[key].classList.add('checked');
                localStorage.setItem('difficulty', JSON.stringify(difficulty_data))
            }
        } else {
            lst[key].classList.remove('checked');
        }
    }
}