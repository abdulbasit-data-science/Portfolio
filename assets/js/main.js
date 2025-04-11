/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// JavaScript
// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skills__card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            skillCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            card.classList.add('active');
            
            console.log(`Clicked on ${card.dataset.skill}`);
        });
    });
});

// Optional: Add this to your CSS for active state
const activeStyle = `
    .skills__card.active {
        border: 2px solid #007bff;
        background-color: #f8f9fa;
    }
`;

// JavaScript work
// JavaScript
// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work__item');
    
    workItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent click from immediately triggering link
            if (e.target.tagName !== 'A') {
                const link = item.querySelector('.work__img');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });
});