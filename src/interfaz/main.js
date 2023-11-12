import {plato} from "../dominio/plato.js"
import { listaPlatos } from "../dominio/listaPlatos.js";
import { ingredientes } from "../dominio/ingredientes.js";


let platos = new listaPlatos();

//Lista ingredientes
let ingrediente1 = new ingredientes("Chocolate", 100, 1000);
let ingrediente2 = new ingredientes("Manteca", 100, 1000);
let ingrediente3 = new ingredientes("Azúcar ", 100, 1000);
let ingrediente4 = new ingredientes("Huevos", 100, 1000);
let ingrediente5 = new ingredientes("Harina sin glúten", 100, 1000);
let ingrediente6 = new ingredientes("Levadura en polvo", 100, 1000);
let ingrediente7 = new ingredientes("Vainilla", 100, 1000);
let ingrediente8 = new ingredientes("Sal", 100, 1000);
let ingrediente9 = new ingredientes("Pan sin gluten", 100, 1000);
let ingrediente10 = new ingredientes("Palta", 100, 1000);
let ingrediente11 = new ingredientes("Aceite", 100, 1000);
let ingrediente12 = new ingredientes("Yogurt", 100, 1000);

/*
const arroz = new Ingrediente('Arroz', 120, 50);
const maizSinGluten = new Ingrediente('Maíz sin gluten', 90, 45);
const trigo = new Ingrediente('Trigo', 150, 60);
const quinoaSinGluten = new Ingrediente('Quinoa sin gluten', 110, 55);
const patata = new Ingrediente('Patata', 80, 40);
const pollo = new Ingrediente('Pollo', 150, 120);
const queso = new Ingrediente('Queso', 80, 50);
const palta = new Ingrediente('Palta', 50, 30);
const manzana = new Ingrediente('Manzana', 60, 10);
const huevo = new Ingrediente('Huevo', 70, 15);*/

//Lista platos
let plato1 = new plato("granola", "Alta", 1 , [ ], false, "", "Desayuno", 100, 1050,"../interfaz/img/granola.jpg"); 
let plato2 = new plato("Galletas Chocolate 2", "Alta", 2 ,[ ], false, "", "Desayuno", 100, 1050,"../interfaz/img/granola.jpg");
let plato3 = new plato("Galletas Chocolate 3", "Alta", 1 , [ ], false, "", "Cena", 100, 1050,"../interfaz/img/granola.jpg");
let plato4 = new plato("Galletas Chocolate 4", "Alta", 2 , [ ], false, "", "Postre", 100, 1050,"../interfaz/img/granola.jpg");

plato1.addIngrediente(ingrediente1);
plato1.addIngrediente(ingrediente2);
plato2.addIngrediente(ingrediente3);

platos.addComida(plato1);
platos.addComida(plato2);
platos.addComida(plato3);
platos.addComida(plato4);

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
        platos.getComidas().sort(function(a, b){return difANum(b.getDificultad()) - difANum(a.getDificultad())});
    }
    if(document.getElementById("OrdenarLista").value=="MenAMayDif"){
        platos.getComidas().sort(function(a, b){return difANum(a.getDificultad()) - difANum(b.getDificultad())});
    }
    if(document.getElementById("OrdenarLista").value=="MayAMenTie"){
        platos.getComidas().sort(function(a, b){return b.getTiempoEstimado() - a.getTiempoEstimado()});
    }
    if(document.getElementById("OrdenarLista").value=="MenAMayTie"){
        platos.getComidas().sort(function(a, b){return a.getTiempoEstimado() - b.getTiempoEstimado()});
    }
    platos.getComidas().forEach(plato => {
        if(plato.getTipo()==document.getElementById("h1titulo").innerHTML){
            if((plato.getDificultad()=="Poca" && document.getElementById("DifPoca").checked)||(plato.getDificultad()=="Media" && document.getElementById("DifMedia").checked)||(plato.getDificultad()=="Alta" && document.getElementById("DifAlta").checked)){
                if((document.getElementById("FiltroTiempoMay").checked && plato.getTiempoEstimado()>=document.getElementById("rangeTiempo").value)||(document.getElementById("FiltroTiempoMen").checked && plato.getTiempoEstimado()<=document.getElementById("rangeTiempo").value)){
                    let li = document.createElement("li");
                    li.className = "text-center"
                    let ul = document.createElement("ul");
                    ul.className = "list-group list-group-horizontal";
                    let img = document.createElement("img");
                    img.src = plato.getImagen();
                    img.style="max-height: 175px;"
                    img.className="rounded mx-auto d-block";
                
                    let span = document.createElement("span");  
                    span.textContent = plato.toString(); 
                    let h3 = document.createElement("h3");
                    h3.textContent = plato.nombrePlato();
                    let button = document.createElement("button");
                    button.className = "btn btn-default";
                    button.textContent = "Mas Info";
                    li.appendChild(ul);
                    let li2 = document.createElement("li");
                    li2.appendChild(img);
                    li2.style="width:10%;";
                    ul.appendChild(li2);
                    li2.className="list-group-item border-0";
                    let li3 = document.createElement("li");
                    let div = document.createElement("div");
                    let ul2 = document.createElement("ul");
                    ul2.style = "list-style-type: none";
                    ul.appendChild(li3);  
                    li3.appendChild(div);
                    li3.className= "list-group-item border-0"
                    li3.style="width: 90%;"
                    div.appendChild(ul2);
                    let liH3 = document.createElement("li");
                    ul2.appendChild(liH3);
                    let liSpan = document.createElement("li");
                    ul2.appendChild(liSpan);
                    let liButton = document.createElement("li");
                    ul2.appendChild(liButton);
                    div.className = "rounded";
                    div.style = "background-color: #8AE4B2; height: 175px;";
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



document.addEventListener('DOMContentLoaded', (event) => {
    displayMenu();
});
