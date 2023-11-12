import {plato} from "../dominio/plato.js"

document.getElementById("btnMen").addEventListener("click", displayMenu);
document.getElementById("btnFav").addEventListener("click", displayFavoritos);
document.getElementById("btnDes").addEventListener("click", displayDesayuno);
document.getElementById("btnAlm").addEventListener("click", displayAlmuerzo);
document.getElementById("btnMer").addEventListener("click", displayMerienda);
document.getElementById("btnCen").addEventListener("click", displayCena);
document.getElementById("btnPos").addEventListener("click", displayPostre);
document.getElementById("btnfiltro").addEventListener("click", displayListaPlatos);

function difANum(dif){
    let ret = 1
    if(dif=="Alta"){
        ret = 3
    }
    if(dif=="Media"){
        ret = 2
    }
    return ret
}

function displayListaPlatos(){
    document.getElementById("listaPlatos").innerHTML="";
    if(document.getElementById("OrdenarLista").value=="MayAMenDif"){
        platos.sort(function(a, b){return difANum(b.getDificultad()) - difANum(a.getDificultad())});
    }
    if(document.getElementById("OrdenarLista").value=="MenAMayDif"){
        platos.sort(function(a, b){return difANum(a.getDificultad()) - difANum(b.getDificultad())});
    }
    if(document.getElementById("OrdenarLista").value=="MayAMenTie"){
        platos.sort(function(a, b){return a.getTiempoEstimado() - b.getTiempoEstimado()});
    }
    if(document.getElementById("OrdenarLista").value=="MenAMayTie"){
        platos.sort(function(a, b){return b.getTiempoEstimado() - a.getTiempoEstimado()});
    }
    platos.forEach(plato => {
        if(plato.getTipo()==document.getElementById("h1titulo").innerHTML){
            if((plato.getDificultad()=="Poca" && document.getElementById("DifPoca").checked)||(plato.getDificultad()=="Media" && document.getElementById("DifMedia").checked)||(plato.getDificultad()=="Alta" && document.getElementById("DifAlta").checked)){
                if((document.getElementById("FiltroTiempoMay").checked && plato.getTiempoEstimado()>=document.getElementById("rangeTiempo").value)||(document.getElementById("FiltroTiempoMen").checked && plato.getTiempoEstimado()<=document.getElementById("rangeTiempo").value)){
                    let li = document.createElement("li");
                    let ul = document.createElement("ul");
                    ul.className = "list-group list-group-horizontal";
                    let img = document.createElement("img");
                    img.src = plato.getImagen();
                    img.width = 200;  
                    img.height = 200; 
                
                    let span = document.createElement("span");  
                    span.textContent = plato.toString(); 
                    span.style = "margin-top: 20px";
                    let h3 = document.createElement("h3");
                    h3.textContent = plato.nombrePlato();
                    let button = document.createElement("button");
                    button.className = "btn btn-default";
                    button.textContent = "Mas Info";
                    li.appendChild(ul);
                    let li2 = document.createElement("li");
                    li2.appendChild(img);
                    ul.appendChild(li2);
                    let li3 = document.createElement("li");
                    let div = document.createElement("div");
                    let ul2 = document.createElement("ul");
                    ul2.style = "list-style-type: none";
                    ul.appendChild(li3);  
                    li3.appendChild(div);
                    div.appendChild(ul2);
                    let liH3 = document.createElement("li");
                    ul2.appendChild(liH3);
                    let liSpan = document.createElement("li");
                    ul2.appendChild(liSpan);
                    let liButton = document.createElement("li");
                    ul2.appendChild(liButton);
                    div.className = "rounded";
                    div.style = "background-color: #8AE4B2; height: 200px; width: 1000px";
                    liH3.appendChild(h3);
                    liSpan.appendChild(span);
                    liButton.appendChild(button);

                    document.getElementById("listaPlatos").appendChild(li);
                }
            }
        }
    });
}

function displayMenu(){
    document.getElementById("divMenu").style.display="block"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divPlatos").style.display="none"
}
function displayFavoritos(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="block"
    document.getElementById("divPlatos").style.display="none"
    
}
function displayDesayuno(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divPlatos").style.display="block"
    document.getElementById("h1titulo").innerHTML="Desayuno";
    displayListaPlatos();
    
}
function displayAlmuerzo(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divPlatos").style.display="block"
    document.getElementById("h1titulo").innerHTML="Almuerzo";
    displayListaPlatos();
    
}
function displayMerienda(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divPlatos").style.display="block"
    document.getElementById("h1titulo").innerHTML="Merienda";
    displayListaPlatos();
}
function displayCena(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divPlatos").style.display="block"
    document.getElementById("h1titulo").innerHTML="Cena";
    displayListaPlatos();
    
}
function displayPostre(){
    document.getElementById("divMenu").style.display="none"
    document.getElementById("divFavoritos").style.display="none"
    document.getElementById("divPlatos").style.display="block"
    document.getElementById("h1titulo").innerHTML="Postre";
    displayListaPlatos();
    
}

let plato1 = new plato("granola", "Alta", 1 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Desayuno", 100, 1050,"../interfaz/img/granola.jpg");
 
let plato2 = new plato("Galletas Chocolate 2", "Media", 100 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Desayuno", 100, 1050,"../interfaz/img/granola.jpg");

let plato3 = new plato("Galletas Chocolate 3", "Alta", 1 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Cena", 100, 1050,"../interfaz/img/granola.jpg");
 
let plato4 = new plato("Galletas Chocolate 4", "Alta", 2 , "50 gr. de chocolate,50 gr. Manteca,100 gr. de Azúcar glass,2 huevos,200 gr. de harina de trigo ,1 cc levadura en polvo ,1 cda. de Vainilla ,Sal", false, "", "Merienda", 100, 1050,"../interfaz/img/granola.jpg");
 
let platos = [plato1, plato2,plato3,plato4];


document.addEventListener('DOMContentLoaded', (event) => {
    displayMenu();
});
