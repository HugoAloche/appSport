import { mobileMenu } from "../../src/js/menu.js";
import { createFooter } from "../../src/js/footer.js";

window.addEventListener('load', initApp);

function initApp() {
    mobileMenu();
    createFooter();
}