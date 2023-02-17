var monBouton = document.getElementsByTagName('button');
console.log(monBouton);

var menu = document.getElementsByClassName('menu_header');
console.log(menu);

monBouton[0].addEventListener('click', menuMobile);


function menuMobile(){
    menu[0].style.display = 'unset';
}
