console.log('TEST!')
var monBoutton=document.getElementsByTagName('popup');
console.log(monBoutton);


//2. l'evenement
// qaund je clic sur le boutton 
monBoutton[0].addEventListener('click', openWin);

function openWin(url){
newwin=window.open('recette.html','','width=400,height=400,top=200,left=200');