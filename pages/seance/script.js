window.addEventListener('load', initApp);

var i = 0;
var current_time = document.getElementById('currentTime');

function initApp() {
    let title = document.getElementById('title');
    let img = document.getElementById('img');
    let btn_done = document.getElementById('done');
    title.textContent = JSON.parse(localStorage.getItem('exos0')).name;
    img.src = "../../src/img/" + JSON.parse(localStorage.getItem('exos0')).name + ".webp";
    btn_done.addEventListener('click', startPause);
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
}