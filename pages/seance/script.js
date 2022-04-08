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
    console.table(lst_exos);
    const title = document.getElementById('title');
    const img = document.getElementById('img');
    const btn_done = document.getElementById('done');
    document.querySelectorAll('td img').forEach(elem => {
        this.lst_img.push(elem);
    })
    title.textContent = JSON.parse(localStorage.getItem('exos0')).name;
    img.src = "../../src/img/" + JSON.parse(localStorage.getItem('exos0')).name + ".webp";
    btn_done.addEventListener('click', function() {
        startPause();
        seriesDone(getIndex());
    });
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