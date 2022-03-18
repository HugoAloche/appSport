window.addEventListener('load', initApp);

var i = 0;
var current_time = document.getElementById('currentTime');
var lst_img = [];

function initApp() {
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
        seriesDone();
    });
}

function startPause() {
    setTimeout(() => {
        document.getElementById('pause').value = i;
        i++;
        current_time.textContent = i + "s";
        if (i < 31) {
            startPause();
        }
    }, 1000);
    document.getElementById('pause').value = 0;
}

function seriesDone() {
    let i = 0;
    lst_img.forEach(elem => {
        if (elem.src.includes('close') && i < 1) {
            elem.src = "../../src/svg/done_green.svg";
            elem.alt = "Icône de réussite";
            i++;
        }
    })

}