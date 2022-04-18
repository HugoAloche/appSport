import { createFooter } from "../../src/js/footer.js";

window.addEventListener('load', initApp);
let i = 0;

function initApp() {
    createFooter();
    const minutes = document.querySelector('.minutes');
    const secondes = document.querySelector('.secondes');

    document.querySelector('#start').addEventListener('click', function() {
        this.style.transform = "translateY(50px)";
        setTimeout(() => {
            this.style.transform = "translateY(-10vh)";
            this.style.opacity = "0";
            setTimeout(() => {
                this.style.display = "none";
            }, 600);
        }, 100);
        startTimmer(minutes, secondes);
    })

    if (!navigator.onLine) {
        document.querySelector('iframe').style.display = "none";
    }
}

function startTimmer(minutes, secondes) {
    let min = parseInt(minutes.textContent);
    let sec = parseInt(secondes.textContent);
    //* Si il reste des minutes
    if (min > 0) {
        //* Si il reste des secondes
        if (sec > 0) {
            i = sec;
            setTimeout(() => {
                if (i > -1) {
                    if (i < 10) {
                        secondes.textContent = `0${i}`;
                    } else {
                        secondes.textContent = i;
                    }
                    startTimmer(minutes, secondes);
                }
                i--;
            }, 1000);
        } else {
            minutes.textContent = `0${min - 1}`;
            secondes.textContent = 59;
            startTimmer(minutes, secondes);
        }
    } else {
        if (sec > 0) {
            i = sec;
            setTimeout(() => {
                if (i > -1) {
                    if (i < 10) {
                        secondes.textContent = `0${i}`;
                    } else {
                        secondes.textContent = i;
                    }
                    startTimmer(minutes, secondes);
                }
                i--;
            }, 1000);
        } else {
            //* Fin du timmer
            location.href = "/appSport/pages/seance";
        }
    }
}