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
/* Comment section */

let add = () => {
    
    let name = document.querySelector('.commentlist #name');
    let comment = document.querySelector('.commentlist #comment');

    if(name.value != "" && comment.value != ""){

        let list = document.getElementById('list');
        let time = new Date();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        let now = h + " : " + m + " : " + s;
        let list_item = document.createElement('li');

        list_item.innerHTML = `
        <span>
            <p>${name.value}</p><p>${now}</p>
        </span>
        <p>${comment.value}</p>
        `;
        list.append(list_item);

        name.value = comment.value = "";
    }
};

/* --------------------------------------------------------- */