import { createFooter } from "../../src/js/footer.js";
window.addEventListener('load', initApp);

var i = 0;
var k = 0;
var current_time = document.getElementById('currentTime');
var lst_img = [];
var lst_exos = [];

function initApp() {
    if (localStorage.length < 2) {
        location.href = '/appSport/pages/preparation-seance';
    }
    let i = 0;
    createFooter();
    for (let key in localStorage) {
        if (key.includes('exos')) {
            let exos = {
                index: i,
                title: Object.keys(key)[i],
                done: false
            }
            lst_exos.push(exos);
            i++;
        }
    }
    const title = document.getElementById('title');
    const img = document.getElementById('img');
    const btn_done = document.getElementById('done');
    title.textContent = JSON.parse(localStorage.getItem('exos0')).name;
    img.src = "../../src/img/" + JSON.parse(localStorage.getItem('exos0')).name + ".webp";
    btn_done.addEventListener('click', function() {
        startPause();
        seriesDone(getIndex());
    });
    makeTable(JSON.parse(localStorage.getItem('difficulty')).type, title.textContent, JSON.parse(localStorage.getItem('difficulty')).series);
}

function startPause() {
    document.getElementById('done').style.visibility = "hidden";
    document.getElementById('pauseText').style.display = "flex";
    setTimeout(() => {
        document.getElementById('pause').value = i;
        i++;
        current_time.textContent = parseInt(current_time.textContent) - 1;
        if (i < 31) {
            startPause();
        } else {
            i = 0;
            document.getElementById('done').style.visibility = "visible";
            document.getElementById('pauseText').style.display = "none";
            document.getElementById('pause').value = 0;
            current_time.textContent = "30";
        }
    }, 1000);
}

function seriesDone(index) {
    let i = 0;
    lst_img.forEach(elem => {
        if (elem.src.includes('close') && i < 1) {
            elem.src = "../../src/svg/done_green.svg";
            elem.alt = "Icône de réussite";
            i++;
            k++;
        }
    })
    if (k === JSON.parse(localStorage.getItem('difficulty')).series) {
        let finis = 0;
        k = 0;
        lst_exos[index].done = true;
        if (localStorage.length > 1) {
            nextExos(index);
        }
        lst_exos.forEach(elem => {
            if (elem.done == true) {
                finis++;
            }
        })
        if (finis == lst_exos.length) {
            finish();
        }
    }
}

function nextExos(index) {
    lst_img.forEach(elem => {
        elem.src = "../../src/svg/close_black_24dp.svg";
        elem.alt = "Icône d'échec";
    });
    document.getElementById('title').textContent = JSON.parse(localStorage.getItem("exos" + lst_exos[index].index)).name;
    document.getElementById('img').src = "../../src/img/" + JSON.parse(localStorage.getItem("exos" + lst_exos[index].index)).name + '.webp';
}

function finish() {
    location = '../seance-finis';
}

function getIndex() {
    let find = false;
    let index = 0;
    let i = 0;
    let exos_done = 0;

    for (let key in localStorage) {
        if (key.includes('exos')) {
            if (lst_exos[i].done == false) {
                find = true;
                index = lst_exos[i].index;
            } else {
                exos_done++;
                if (exos_done == lst_exos.length) {
                    finish();
                }
            }
            i++;
        }
    }
    if (find) {
        return lst_exos[index].index;
    }
}

function makeTable(difficulty, name, series) {
    const table = document.getElementById('table');
    let td_lst = [];
    for (let i = 0; i < series; i++) {
        let tds = [];
        let tr = table.appendChild(document.createElement('tr'));
        for (let k = 0; k < 3; k++) {
            tds.push(tr.appendChild(document.createElement('td')));
        }
        td_lst.push(tds);
    }
    td_lst.forEach(function(td, index) {
        td[0].textContent = index + 1;
        td[1].textContent = getRep(name, difficulty);
        let img = td[2].appendChild(document.createElement('img'));
        img.src = "../../src/svg/close_black_24dp.svg";
        img.alt = "Icône d'echec";
    })

    document.querySelectorAll('td img').forEach(elem => {
        lst_img.push(elem);
    })
}

function getRep(name, difficulty) {
    if (name === "Gainage") {
        if (difficulty === "easy") {
            return '30s';
        } else if (difficulty === "medium") {
            return '45s';
        } else {
            return '1mn';
        }
    } else if (name === "Dips") {
        if (difficulty === "easy") {
            return '5';
        } else if (difficulty === "medium") {
            return '10';
        } else {
            return '15';
        }
    } else if (name === "Squat") {
        if (difficulty === "easy") {
            return '10';
        } else if (difficulty === "medium") {
            return '20';
        } else {
            return '20(+10Kg)';
        }
    } else if (name === "Pompes") {
        if (difficulty === "easy") {
            return '10';
        } else if (difficulty === "medium") {
            return '15';
        } else {
            return '15(+10Kg)';
        }
    } else if (name === "Abdos") {
        if (difficulty === "easy") {
            return '5';
        } else if (difficulty === "medium") {
            return '10';
        } else {
            return '10(+10Kg)';
        }
    } else if (name === "Traction") {
        if (difficulty === "easy") {
            return '5';
        } else if (difficulty === "medium") {
            return '15';
        } else {
            return '15(+10Kg)';
        }
    } else if (name === "Chaise") {
        if (difficulty === "easy") {
            return '30s';
        } else if (difficulty === "medium") {
            return '45s';
        } else {
            return '1mn';
        }
    } else if (name === "Fentes") {
        if (difficulty === "easy") {
            return '10';
        } else if (difficulty === "medium") {
            return '20';
        } else {
            return '20(+10Kg)';
        }
    } else if (name === "Superman") {
        if (difficulty === "easy") {
            return '10';
        } else if (difficulty === "medium") {
            return '15';
        } else {
            return '15(+10Kg)';
        }
    }
}