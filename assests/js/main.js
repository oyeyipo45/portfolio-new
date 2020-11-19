const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show');
		});
	}
};



showMenu('nav-toggle', 'nav-menu')


const navLink = document.querySelectorAll('.nav__link')


function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))



const scrl = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


scrl.reveal('.home__title', {})
scrl.reveal('.button', {delay: 200})
scrl.reveal('.home__img', {delay: 400})
scrl.reveal('.home__social-icon', {interval: 200})


scrl.reveal('.about__img', {})
scrl.reveal('.about__subtitle', {delay: 200})
scrl.reveal('.about__text', {delay: 400})

scrl.reveal('.skills__subtitle', {})
scrl.reveal('.skills__text', {delay: 200})
scrl.reveal('.skills__data', {interval: 200})
scrl.reveal('.skills__imgt', {delay: 600})

scrl.reveal('.work__img', {interval: 200})

scrl.reveal('.contact__input', {interval: 200})




const cover = document.querySelector(".toggle-container input");

cover.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
    }
});