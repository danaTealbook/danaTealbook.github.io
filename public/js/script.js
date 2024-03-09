document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
    }

    window.onscroll = () => {
        // set active navbar links:
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                });
            }
        });

        // sticky header:
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 50);
    };
});