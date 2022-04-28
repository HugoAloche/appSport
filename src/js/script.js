import { createFooter } from './footer.js';
import { mobileMenu } from './menu.js';
'./footer.js';
window.addEventListener('load', initApp);

function initApp() {
    createFooter();
    mobileMenu();
}