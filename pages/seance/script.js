import { createFooter } from "../../src/js/footer.js";
window.addEventListener('load', initApp);

var i = 0;
var k = 0;
var current_time = document.getElementById('currentTime');
var lst_img = [];
var lst_exos = [];

function initApp() {
    createFooter();
    for (let i = 0; i < localStorage.length; i++) {
        let exos = {
            index: i,
            title: Object.keys(localStorage)[i],
            done: false
        }
        lst_exos.push(exos);
    }
    console.table(localStorage);
    const title = document.getElementById('title');
    const img = document.getElementById('img');
    const btn_done = document.getElementById('done');
    document.querySelectorAll('td img').forEach(elem => {
        lst_img.push(elem);
    })
    title.textContent = JSON.parse(localStorage.getItem('exos0')).name;
    img.src = "../../src/img/" + JSON.parse(localStorage.getItem('exos0')).name + ".webp";
    btn_done.addEventListener('click', function() {
        startPause();
        seriesDone(getIndex());
    });
    makeTable(localStorage.getItem('difficulty'), title.textContent);
}

function startPause() {
    document.getElementById('done').style.visibility = "hidden";
    document.getElementById('pauseText').style.display = "flex";
    setTimeout(() => {
        document.getElementById('pause').value = i;
        i++;
        current_time.textContent = i + "s";
        if (i < 31) {
            startPause();
        } else {
            i = 0;
            document.getElementById('done').style.visibility = "visible";
            document.getElementById('pauseText').style.display = "none";
            document.getElementById('pause').value = 0;
            current_time.textContent = "0";
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
    if (k === 3) {
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
    let exos_done = 0;
    lst_exos.forEach(elem => {
        if (elem.done == false) {
            find = true;
            index = elem.index;
        } else {
            exos_done++;
            if (exos_done == lst_exos.length) {
                finish();
            }
        }
    })
    if (find) {
        return lst_exos[index].index;
    }
}

function makeTable(difficulty, name) {
    const table = document.getElementById('table');
    const reps = document.querySelectorAll('.rep');
    console.log(difficulty, name);
    if (name === 'Gainage') {
        const exo = new Gainage(difficulty);
        exo.setSeries(table);
        exo.setRep(reps);
    } else if (name === 'Dips') {
        const exo = new Dips(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Squat') {
        const exo = new Squat(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Pompes') {
        const exo = new Pompes(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Abdos') {
        const exo = new Abdos(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Traction') {
        const exo = new Traction(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Chaise') {
        const exo = new Chaise(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Fentes') {
        const exo = new Fentes(difficulty);
        console.log(exo.setRep());
    } else if (name === 'Superman') {
        const exo = new Superman(difficulty);
        console.log(exo.setRep());
    }
}
class Gainage {
    constructor(difficulty) {
        this.difficulty = difficulty;
    }

    setSeries(pTable) {
        let lst_tr = [];
        let lst_td = [];
        let lst_img = [];
        if (this.difficulty === 'easy') {
            for (let i = 0; i < 3; i++) {
                lst_tr[i] = pTable.appendChild(document.createElement('tr'));
                for (let k = 0; k < 3; k++) {
                    lst_td[k] = lst_tr[i].appendChild(document.createElement('td'));
                    console.log(k, lst_td[k]);
                    // lst_td[k].textContent = i + 1;
                    // lst_td[k + 1].classList.add('rep');
                    // lst_td[1]
                    // lst_img[k] = lst_td[2].appendChild(document.createElement('img'));
                    // lst_img[k].src = '../../src/svg/close_black_24dp.svg';
                }
            }
        } else if (this.difficulty === 'medium') {} else {}

    }

    setRep(pTd) {
        if (this.difficulty === 'easy') {
            pTd.forEach(td => {
                td.textContent = '30s';
            })
        } else if (this.difficulty === 'medium') {
            pTd.forEach(td => {
                td.textContent = '45s';
            })
        } else {
            pTd.forEach(td => {
                td.textContent = '1min';
            })
        }
    }
}