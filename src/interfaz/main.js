document.getElementById("btnMen").addEventListener("click", displayMenu);
document.getElementById("btnFav").addEventListener("click", displayFavoritos);
document.getElementById("btnDes").addEventListener("click", displayDesayuno);
document.getElementById("btnAlm").addEventListener("click", displayAlmuerzo);
document.getElementById("btnMer").addEventListener("click", displayMerienda);
document.getElementById("btnCen").addEventListener("click", displayCena);
document.getElementById("btnPos").addEventListener("click", displayPostre);

function displayMenu(){
    document.getElementById("divMenu").style.display="block"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divDesayuno").style.display="none"
    document.getElementById("divAlmuerzo").style.display="none"
    document.getElementById("divMerienda").style.display="none"
    document.getElementById("divCena").style.display="none"
    document.getElementById("divPostre").style.display="none"
}
function displayFavoritos(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="block"
    document.getElementById("divDesayuno").style.display="none"
    document.getElementById("divAlmuerzo").style.display="none"
    document.getElementById("divMerienda").style.display="none"
    document.getElementById("divCena").style.display="none"
    document.getElementById("divPostre").style.display="none"
}
function displayDesayuno(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divDesayuno").style.display="block"
    document.getElementById("divAlmuerzo").style.display="none"
    document.getElementById("divMerienda").style.display="none"
    document.getElementById("divCena").style.display="none"
    document.getElementById("divPostre").style.display="none"
}
function displayAlmuerzo(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divDesayuno").style.display="none"
    document.getElementById("divAlmuerzo").style.display="block"
    document.getElementById("divMerienda").style.display="none"
    document.getElementById("divCena").style.display="none"
    document.getElementById("divPostre").style.display="none"
}
function displayMerienda(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divDesayuno").style.display="none"
    document.getElementById("divAlmuerzo").style.display="none"
    document.getElementById("divMerienda").style.display="block"
    document.getElementById("divCena").style.display="none"
    document.getElementById("divPostre").style.display="none"
}
function displayCena(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divDesayuno").style.display="none"
    document.getElementById("divAlmuerzo").style.display="none"
    document.getElementById("divMerienda").style.display="none"
    document.getElementById("divCena").style.display="block"
    document.getElementById("divPostre").style.display="none"
}
function displayPostre(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divDesayuno").style.display="none"
    document.getElementById("divAlmuerzo").style.display="none"
    document.getElementById("divMerienda").style.display="none"
    document.getElementById("divCena").style.display="none"
    document.getElementById("divPostre").style.display="block"
}