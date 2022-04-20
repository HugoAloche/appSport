import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { mobileMenu } from './menu.js';
'./footer.js';
window.addEventListener('load', initApp);

function initApp() {
    createHeader();
    createFooter();
    mobileMenu();
}