export function createHeader() {
    const header = document.getElementsByTagName('header');
    const ul = document.createElement('ul');
    const lst = header[0].appendChild(ul);
    const li1 = document.createElement('li');
    li1.textContent = "S'entrainer";
    lst.appendChild(li1);
    const li2 = document.createElement('li');
    li2.textContent = "Mon compte";
    lst.appendChild(li2);
}