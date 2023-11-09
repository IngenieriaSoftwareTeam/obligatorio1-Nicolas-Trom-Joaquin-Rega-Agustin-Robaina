import {plato} from "../dominio/plato.js"

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

let plato1 = new plato("Galletas Chocolate", "Alta", 1 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Desayuno", 100, 1050);
 
let plato2 = new plato("Galletas Chocolate 2", "Alta", 2 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Desayuno", 100, 1050);

let plato3 = new plato("Galletas Chocolate 3", "Alta", 1 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Cena", 100, 1050);
 
let plato4 = new plato("Galletas Chocolate 4", "Alta", 2 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Postre", 100, 1050);
 
 
function listaPlatosXdia(){
    
    let platos = [plato1, plato2,plato3,plato4];
    let tipoALista = {
        'Desayuno': 'listaPlatos',
        'Cena': 'listaPlatosCena',
        'Merienda': 'listaPlatosMerienda',
        'Almuerzo': 'listaPlatosAlmuerzo',
        'Postre': 'listaPlatosPostre',
        
    };
    

    platos.forEach(plato => {
        let tipo = plato.getTipo();
        console.log(tipo);
        if (tipo in tipoALista) {
            let listaPlatosElement = document.getElementById(tipoALista[tipo]);
            let li = document.createElement("li");
            li.textContent = plato.nombrePlato(); 
            listaPlatosElement.appendChild(li);
        }
    });
   
}
document.addEventListener('DOMContentLoaded', (event) => {
    listaPlatosXdia();
});
