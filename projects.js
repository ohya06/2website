var indexValue = 1;
showImg(indexValue)
function btm_slide(e){  showImg(indexValue = e); }
function side_slide(e){ showImg(indexValue += e); }
function showImg(e){
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.btm-sliders span');
    if(e > img.length){ indexValue = 1;  }
    if(e < 1) { indexValue = img.length; }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background = "rgba(255,255,255,0.1)";
    }
    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = "white";
}




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
/* Navigation Mini Button */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');

    document.getElementById('clock').classList.toggle('displaynone');
});