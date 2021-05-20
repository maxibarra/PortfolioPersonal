let sobreMi = document.querySelector('#sobreMi');
let Proyectos = document.querySelector('#Proyectos');
let Contacto = document.querySelector('#Contacto');
let sobre__Mi = document.querySelector('#Sobre-Mi');
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.nav');
let menuContent = document.querySelector('.menu');
var activador = true;


btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});

sobreMi.addEventListener('click', () => {
  document.body.scrollTop =200;
  document.documentElement.scrollTop = 200;
});

sobre__Mi.addEventListener('click', () => {
  document.body.scrollTop = 400;
  document.documentElement.scrollTop = 400;  
});

Proyectos.addEventListener('click', () => {
  document.body.scrollTop = 1400;
  document.documentElement.scrollTop = 1400;
});

Contacto.addEventListener('click', () => {
    document.body.scrollTop = 1800;
    document.documentElement.scrollTop = 1800;
  });

  //Scroll Efect
 let goTop = document.querySelector('.ir-Arriba');
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Add class "active"
let enlaces = document.querySelectorAll('.nav li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid rgb(20, 10, 165)';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});