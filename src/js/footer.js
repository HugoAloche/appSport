export function createFooter() {
    const footer = document.getElementsByTagName('footer');
    const ul1 = document.createElement('ul');
    const lst1 = footer[0].appendChild(ul1);
    const ul2 = document.createElement('ul');
    const lst2 = footer[0].appendChild(ul2);


    //* LISTE 1
    const li1 = document.createElement('li');
    li1.textContent = "A propos";
    lst1.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = "Dernière mise à jour (v1) : 08/04/2022";
    lst1.appendChild(li2);

    const li3 = document.createElement('li');
    const link1 = document.createElement('a');
    link1.textContent = "Mentions légales";
    link1.href = "pages/mentions-legales";
    lst1.appendChild(li3).appendChild(link1);


    //* LISTE 2
    const li4 = document.createElement('li');
    li4.textContent = "Me contacter";
    lst2.appendChild(li4);
    const li5 = document.createElement('li');
    const link2 = document.createElement('a');
    link2.textContent = "haloche035@gmail.com";
    link2.href = "mailto:haloche035@gmail.com";
    lst2.appendChild(li5).appendChild(link2);
}