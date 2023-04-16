
const thmasButton = document.querySelector('#thmas-button');
const thmasInputText = document.querySelector('#thmas-input-text');

thmasButton.addEventListener('click', clickButton);

function clickButton() {
var URL = "https://t81oub.github.io/puzle4-135" + thmasInputText.value + "Uijd160087/";

var win = window.open(URL, "_blank");
}
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







const result_box = document.querySelector(".result_box");
const continue_btn = document.querySelector(".buttons .start");
continue_btn.onclick = ()=>{
    
    result_box.classList.add("opacity"); 
   
}
