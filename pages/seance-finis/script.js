import { createFooter } from "../../src/js/footer.js";
import { mobileMenu } from "../../src/js/menu.js";

window.addEventListener('load', initApp);

function initApp() {
    mobileMenu();
    createFooter();
}