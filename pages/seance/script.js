window.addEventListener('load', initApp);

function initApp() {
    let title = document.getElementById('title');
    let img = document.getElementById('img');
    title.textContent = JSON.parse(localStorage.getItem('exos0')).name;
    img.src = "../../src/img/" + JSON.parse(localStorage.getItem('exos0')).name + ".webp";
    console.log(localStorage.length);
}