import { createHeader } from './header.js';
import { createFooter } from './footer.js';
'./footer.js';
window.addEventListener('load', initApp);

function initApp() {
    createHeader();
    createFooter();
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        sendMail(event);
    })
}

function sendMail(event) {
    event.preventDefault();
    Email.send({
        Host: "smtp.gmail.com",
        Username: "haloche035@gmail.com",
        Password: "DC6M3VYRR5TW?",
        To: "haloche035@gmail.com",
        From: document.getElementById('email').value,
        Subject: document.getElementById('objet').selectedIndex,
        Body: `<html><h1>${document.getElementById('objet').selectedIndex}</h1><p>Prénom : ${document.getElementById('prenom').value} <br> Email : ${document.getElementById('email').value} <br> Message : ${document.getElementById('message').value}</p></html>`
    }).then(
        message => alert(message)
    );
}