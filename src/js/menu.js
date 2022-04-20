export function mobileMenu() {
    const navbar = document.querySelector('nav.menu');
    const ul = document.createElement('ul');
    const link = document.createElement('a');
    link.textContent = "Accueil"
    link.href = "/appSport"
    const icon = document.createElement('img');
    icon.src = '/appSport/src/svg/home.svg';
    icon.alt = 'Icône de maison';
    const lst = navbar.appendChild(ul);
    const li1 = document.createElement('li');
    link.appendChild(icon);
    li1.appendChild(link);
    lst.appendChild(li1);

    const link2 = document.createElement('a');
    link2.textContent = "Profil";
    link2.href = "/appSport/pages/profil";
    const icon2 = document.createElement('img');
    icon2.src = '/appSport/src/svg/profile.svg';
    icon2.alt = 'Icône de profil';
    const li2 = document.createElement('li');
    link2.appendChild(icon2);
    li2.appendChild(link2);
    lst.appendChild(li2);

    const link3 = document.createElement('a');
    link3.textContent = "Paramètre"
    link3.href = "/appSport/pages/parametre"
    const icon3 = document.createElement('img');
    icon3.src = '/appSport/src/svg/settings.svg';
    icon3.alt = 'Icône de paramètres';
    const li3 = document.createElement('li');
    link3.appendChild(icon3);
    li3.appendChild(link3);
    lst.appendChild(li3);
    if (location.href.toString()[location.href.toString().length - 1] === '/') {
        if (location.href.includes('profil')) {
            li1.classList.remove('active');
            li2.classList.add('active');
            li3.classList.remove('active');
        } else if (location.href.includes('parametre')) {
            li1.classList.remove('active');
            li2.classList.remove('active');
            li3.classList.add('active');
        } else {
            li1.classList.add('active');
            li2.classList.remove('active');
            li3.classList.remove('active');
        }
    }
}