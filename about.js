/* -------------------------------------------------------- */
/* Navigation  */
let isTransparent = true;
const nav = document.querySelector('nav');

window,addEventListener('scroll', event=> {
    if(window,pageYOffset >70 && isTransparent) {
        nav.classList.add('_fixed');
        isTransparent = false;
    }
    
    if (window.pageYOffset <= 70 && !isTransparent){
        nav.classList.remove('_fixed');
        isTransparent = true;
    }
});


/* --------------------------------------------------------- */
/* Clock */
setInterval(() => {

let time = document.querySelector('p');
let half = document.querySelector('p span');
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

if(h < 10)
    h = "0" + h;
if(m <10)
    m = "0" + h;
if(s < 10)
    s = "0" + s;

if(h >= 12)
    time.innerText = `${h} : ${m} : ${s} PM`;
if(h < 12)
    time.innerText = `${h} : ${m} : ${s} AM`;
}, 1000);



/* --------------------------------------------------------- */


/* var typed = new typed('.text', {
    strings: ['Welcome! ', 'Story Tellers of all over the world! '],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
 */







/* --------------------------------------------------------- */
/* CLOCK */


/* --------------------------------------------------------- */
/* TOGGLE BUTTON  NAV BAR*/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');

    document.getElementById('clock').classList.toggle('displaynone');
});