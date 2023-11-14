import { plato } from "../dominio/plato.js"
import { listaPlatos } from "../dominio/listaPlatos.js";
import { ingredientes } from "../dominio/ingredientes.js";





let platos = new listaPlatos();

//Lista ingredientes




//Lista platos
let plato1 = new plato("Waffles De Arroz", "Media", 20, [], true, "", "Desayuno", 100, 1050, "../interfaz/img/wafflesDeArroz.jpg");
let plato2 = new plato("Yogurt con Granola", "Media", 10, [], true, "", "Desayuno", 100, 1050, "../interfaz/img/yogurtConGranola.jpg");
let plato3 = new plato("Berenjenas Rellenas de Atun", "Alta", 80, [], false, "", "Almuerzo", 100, 1050, "../interfaz/img/berenjenasRellenasAtun.jpg");
let plato4 = new plato("Milanesa", "Media", 30, [], false, "", "Almuerzo", 100, 1050, "../interfaz/img/milanesa.png");
let plato5 = new plato("Galletas de Avena", "Alta", 60, [], false, "", "Merienda", 100, 1050, "../interfaz/img/galletasDeAvena.jpg");
// Receta 1
let azucar = new ingredientes("Azúcar", 60, 60);
let huevo = new ingredientes("Huevo", 5, 150);
let arroz = new ingredientes("Arroz", 71, 130);
let leche = new ingredientes("Leche", 42, 150);
plato1.addIngrediente(huevo);
plato1.addIngrediente(leche);
plato1.addIngrediente(arroz);
plato1.addIngrediente(azucar);

// Receta 2
let yogurt = new ingredientes("Yogurt", 77, 59);
let granola = new ingredientes("Granola", 213, 417);
let frutosRojos = new ingredientes("Frutos rojos", 215, 69);
plato2.addIngrediente(yogurt);
plato2.addIngrediente(granola);
plato2.addIngrediente(frutosRojos);

// Receta 3
let berenjenas = new ingredientes("Berenjenas", 119, 25);
let atun = new ingredientes("Atún", 259, 130);
let cebolla = new ingredientes("Cebolla", 89, 40);
let salsaTomate = new ingredientes("Salsa de tomate", 78, 29);
let quesoRallado = new ingredientes("Queso rallado", 130, 110);
let sal = new ingredientes("Sal", 66, 0);
let pimienta = new ingredientes("Pimienta", 69, 0);
let aceite = new ingredientes("Aceite", 97, 888);
plato3.addIngrediente(berenjenas);
plato3.addIngrediente(atun);
plato3.addIngrediente(cebolla);
plato3.addIngrediente(salsaTomate);
plato3.addIngrediente(quesoRallado);
plato3.addIngrediente(sal);
plato3.addIngrediente(pimienta);
plato3.addIngrediente(aceite);

// Receta  4
let carneNalga = new ingredientes("Carne Nalga", 399, 129);
let perejil = new ingredientes("Perejil", 36, 36);
let ajo = new ingredientes("Ajo", 73, 149);
let maicena = new ingredientes("Maicena", 70, 381);
let rebozadoSinTACC = new ingredientes("Rebzado sin TACC(de Arroz)", 100, 256);
plato4.addIngrediente(carneNalga);
plato4.addIngrediente(perejil);
plato4.addIngrediente(ajo);
plato4.addIngrediente(maicena);
plato4.addIngrediente(rebozadoSinTACC);
plato4.addIngrediente(huevo);
plato4.addIngrediente(sal);
plato4.addIngrediente(pimienta);

// Receta 5
let avena = new ingredientes("Avena", 63, 68);
let esenciaVainilla = new ingredientes("Esencia de Vainilla", 142, 288);
let canela = new ingredientes("Canela", 96, 247);
let harina = new ingredientes("Harina Sin Gluten", 135, 381);
plato5.addIngrediente(avena);
plato5.addIngrediente(huevo);
plato5.addIngrediente(azucar);
plato5.addIngrediente(esenciaVainilla);
plato5.addIngrediente(canela);
plato5.addIngrediente(harina);
plato5.addIngrediente(aceite);

// Agrego platos a la lista
platos.addComida(plato1);
platos.addComida(plato2);
platos.addComida(plato3);
platos.addComida(plato4);
platos.addComida(plato5);

document.getElementById("btnMen").addEventListener("click", displayMenu);
document.getElementById("btnFav").addEventListener("click", displayFavoritos);
document.getElementById("btnDes").addEventListener("click", displayDesayuno);
document.getElementById("btnAlm").addEventListener("click", displayAlmuerzo);
document.getElementById("btnMer").addEventListener("click", displayMerienda);
document.getElementById("btnCen").addEventListener("click", displayCena);
document.getElementById("btnPos").addEventListener("click", displayPostre);
document.getElementById("btnfiltro").addEventListener("click", ActListas);

function masInfo(plato) {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "none"
    document.getElementById("divMasInfo").style.display = "block"
    document.getElementById("MasInfoTitulo").innerHTML = plato.nombrePlato()
    document.getElementById("MasInfoImg").src = plato.getImagen();
    let ingredientes = plato.getIngredientes();
    document.getElementById("ListaIngredientes").innerHTML = ""
    document.getElementById("ListaReceta").innerHTML = ""

    for (let i = 0; i < ingredientes.length; i++) {
        let li = document.createElement('li');
        li.className = "list-group-item border-0"
        li.style = "background-color: #14C864;"
        li.textContent = ingredientes[i].toString();
        document.getElementById("ListaIngredientes").appendChild(li);
    }
    let receta = plato.getInstrucciones();
    for (let i = 0; i < receta.length; i++) {
        let li = document.createElement('li');
        li.className = "list-group-item border-0"
        li.style = "background-color: #14C864;"
        li.textContent = receta[i].toString();
        document.getElementById("ListaReceta").appendChild(li);
    }
    let btnEstrella = document.getElementById("btnFavMasInfo");
    let imgEstrella = document.getElementById("imgFavMasInfo");
    if (plato.getFavorito()) {
        imgEstrella.src = "img/EstrellaAmarilla.png"
        btnEstrella.onclick = function () {
            plato.setFavorito(false);
            masInfo(plato);
        };
    } else {
        imgEstrella.src = "img/EstrellaBlanca.png"
        btnEstrella.onclick = function () {
            plato.setFavorito(true);
            masInfo(plato);
        };
    }

}

function ActListas() {
    if ("Favoritos" == document.getElementById("h1titulo").innerHTML) {
        displaylistafavs();
    } else {
        displayListaPlatos();
    }
}
function difANum(dif) {
    let ret = 1
    if (dif == "Alta") {
        ret = 3
    }
    if (dif == "Media") {
        ret = 2
    }
    return ret
}
function displaylistafavs() {
    document.getElementById("listaPlatos").innerHTML = "";
    if (document.getElementById("OrdenarLista").value == "MayAMenDif") {
        platos.getComidas().sort(function (a, b) { return difANum(b.getDificultad()) - difANum(a.getDificultad()) });
    }
    if (document.getElementById("OrdenarLista").value == "MenAMayDif") {
        platos.getComidas().sort(function (a, b) { return difANum(a.getDificultad()) - difANum(b.getDificultad()) });
    }
    if (document.getElementById("OrdenarLista").value == "MayAMenTie") {
        platos.getComidas().sort(function (a, b) { return b.getTiempoEstimado() - a.getTiempoEstimado() });
    }
    if (document.getElementById("OrdenarLista").value == "MenAMayTie") {
        platos.getComidas().sort(function (a, b) { return a.getTiempoEstimado() - b.getTiempoEstimado() });
    }
    platos.getComidas().forEach(plato => {
        if ("Favoritos" == document.getElementById("h1titulo").innerHTML && plato.getFavorito()) {
            if ((plato.getDificultad() == "Poca" && document.getElementById("DifPoca").checked) || (plato.getDificultad() == "Media" && document.getElementById("DifMedia").checked) || (plato.getDificultad() == "Alta" && document.getElementById("DifAlta").checked)) {
                if ((document.getElementById("FiltroTiempoMay").checked && plato.getTiempoEstimado() >= document.getElementById("rangeTiempo").value) || (document.getElementById("FiltroTiempoMen").checked && plato.getTiempoEstimado() <= document.getElementById("rangeTiempo").value)) {
                    let platoElem = document.createElement("li");
                    platoElem.className = "text-center"
                    let listaUsada = document.createElement("ul");
                    listaUsada.className = "list-group list-group-horizontal";
                    let imgPlato = document.createElement("img");
                    imgPlato.src = plato.getImagen();
                    imgPlato.style = "max-height: 175px;"
                    imgPlato.className = "rounded mx-auto d-block";

                    let toStringPlato = document.createElement("p");
                    toStringPlato.textContent = plato.toString();
                    toStringPlato.className = "mt-4"
                    let nombrePlato = document.createElement("h3");
                    nombrePlato.textContent = plato.nombrePlato();
                    nombrePlato.style = "padding-top:10px;"
                    let btnMasInfo = document.createElement("button");
                    let btnEstrella = document.createElement("button");
                    btnMasInfo.type = "button";
                    let imgEstrella = document.createElement("img");
                    if (plato.getFavorito()) {
                        imgEstrella.src = "img/EstrellaAmarilla.png"
                        btnEstrella.onclick = function () {
                            plato.setFavorito(false);
                            ActListas();
                        };
                    } else {
                        imgEstrella.src = "img/EstrellaBlanca.png"
                        btnEstrella.onclick = function () {
                            plato.setFavorito(true);
                            ActListas();
                        };
                    }
                    btnEstrella.appendChild(imgEstrella);
                    btnEstrella.className = "btn btn-default"
                    imgEstrella.style = "width:30px; height:30px;"
                    btnMasInfo.className = "btn btn-default";
                    btnMasInfo.textContent = "Mas Info";
                    platoElem.appendChild(listaUsada);
                    let Seccionimg = document.createElement("li");
                    Seccionimg.appendChild(imgPlato);
                    Seccionimg.style = "width:10%;";
                    listaUsada.appendChild(Seccionimg);
                    Seccionimg.className = "list-group-item border-0";
                    let SeccionInfo = document.createElement("li");
                    let divInfoSup = document.createElement("div");
                    let divInfo = document.createElement("div");
                    listaUsada.appendChild(SeccionInfo);
                    divInfo.className = ""
                    SeccionInfo.appendChild(divInfoSup);
                    divInfoSup.appendChild(divInfo);
                    SeccionInfo.className = "list-group-item border-0"
                    SeccionInfo.style = "width: 90%;"
                    divInfo.appendChild(nombrePlato);
                    divInfo.appendChild(toStringPlato);
                    divInfo.appendChild(btnMasInfo);
                    divInfo.appendChild(btnEstrella);
                    divInfoSup.className = "rounded";
                    divInfoSup.style = "background-color: #8AE4B2; height: 175px;";
                    btnMasInfo.onclick = function () { masInfo(plato) };

                    document.getElementById("listaPlatos").appendChild(platoElem);
                }
            }
        }
    });
}

function displayListaPlatos() {
    document.getElementById("listaPlatos").innerHTML = "";
    if (document.getElementById("OrdenarLista").value == "MayAMenDif") {
        platos.getComidas().sort(function (a, b) { return difANum(b.getDificultad()) - difANum(a.getDificultad()) });
    }
    if (document.getElementById("OrdenarLista").value == "MenAMayDif") {
        platos.getComidas().sort(function (a, b) { return difANum(a.getDificultad()) - difANum(b.getDificultad()) });
    }
    if (document.getElementById("OrdenarLista").value == "MayAMenTie") {
        platos.getComidas().sort(function (a, b) { return b.getTiempoEstimado() - a.getTiempoEstimado() });
    }
    if (document.getElementById("OrdenarLista").value == "MenAMayTie") {
        platos.getComidas().sort(function (a, b) { return a.getTiempoEstimado() - b.getTiempoEstimado() });
    }
    platos.getComidas().forEach(plato => {
        if (plato.getTipo() == document.getElementById("h1titulo").innerHTML) {
            if ((plato.getDificultad() == "Poca" && document.getElementById("DifPoca").checked) || (plato.getDificultad() == "Media" && document.getElementById("DifMedia").checked) || (plato.getDificultad() == "Alta" && document.getElementById("DifAlta").checked)) {
                if ((document.getElementById("FiltroTiempoMay").checked && plato.getTiempoEstimado() >= document.getElementById("rangeTiempo").value) || (document.getElementById("FiltroTiempoMen").checked && plato.getTiempoEstimado() <= document.getElementById("rangeTiempo").value)) {
                    let platoElem = document.createElement("li");
                    platoElem.className = "text-center"
                    let listaUsada = document.createElement("ul");
                    listaUsada.className = "list-group list-group-horizontal";
                    let imgPlato = document.createElement("img");
                    imgPlato.src = plato.getImagen();
                    imgPlato.style = "max-height: 175px;"
                    imgPlato.className = "rounded mx-auto d-block";

                    let toStringPlato = document.createElement("p");
                    toStringPlato.textContent = plato.toString();
                    toStringPlato.className = "mt-4"
                    let nombrePlato = document.createElement("h3");
                    nombrePlato.textContent = plato.nombrePlato();
                    nombrePlato.style = "padding-top:10px;"
                    let btnMasInfo = document.createElement("button");
                    let btnEstrella = document.createElement("button");
                    let imgEstrella = document.createElement("img");
                    if (plato.getFavorito()) {
                        imgEstrella.src = "img/EstrellaAmarilla.png"
                        btnEstrella.onclick = function () {
                            plato.setFavorito(false);
                            ActListas();
                        };
                    } else {
                        imgEstrella.src = "img/EstrellaBlanca.png"
                        btnEstrella.onclick = function () {
                            plato.setFavorito(true);
                            ActListas();
                        };
                    }

                    btnMasInfo.onclick = function () { masInfo(plato) };
                    btnEstrella.appendChild(imgEstrella);
                    btnEstrella.className = "btn btn-default"
                    imgEstrella.style = "width:30px; height:30px;"
                    btnMasInfo.className = "btn btn-default";
                    btnMasInfo.textContent = "Mas Info";
                    platoElem.appendChild(listaUsada);
                    let Seccionimg = document.createElement("li");
                    Seccionimg.appendChild(imgPlato);
                    Seccionimg.style = "width:10%;";
                    listaUsada.appendChild(Seccionimg);
                    Seccionimg.className = "list-group-item border-0";
                    let SeccionInfo = document.createElement("li");
                    let divInfoSup = document.createElement("div");
                    let divInfo = document.createElement("div");
                    listaUsada.appendChild(SeccionInfo);
                    divInfo.className = ""
                    SeccionInfo.appendChild(divInfoSup);
                    divInfoSup.appendChild(divInfo);
                    SeccionInfo.className = "list-group-item border-0"
                    SeccionInfo.style = "width: 90%;"
                    divInfo.appendChild(nombrePlato);
                    divInfo.appendChild(toStringPlato);
                    divInfo.appendChild(btnMasInfo);
                    divInfo.appendChild(btnEstrella);
                    divInfoSup.className = "rounded";
                    divInfoSup.style = "background-color: #8AE4B2; height: 175px;";

                    document.getElementById("listaPlatos").appendChild(platoElem);
                }
            }
        }
    });
}

function displayMenu() {
    document.getElementById("divMenu").style.display = "block"
    document.getElementById("divPlatos").style.display = "none"
    document.getElementById("divMasInfo").style.display = "none"
    mostrarSug();
}
function displayFavoritos() {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "block"
    document.getElementById("h1titulo").innerHTML = "Favoritos";
    document.getElementById("divMasInfo").style.display = "none"
    displaylistafavs();
}
function displayDesayuno() {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "block"
    document.getElementById("h1titulo").innerHTML = "Desayuno";
    document.getElementById("divMasInfo").style.display = "none"
    displayListaPlatos();

}
function displayAlmuerzo() {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "block"
    document.getElementById("h1titulo").innerHTML = "Almuerzo";
    document.getElementById("divMasInfo").style.display = "none"
    displayListaPlatos();

}
function displayMerienda() {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "block"
    document.getElementById("h1titulo").innerHTML = "Merienda";
    document.getElementById("divMasInfo").style.display = "none"
    displayListaPlatos();
}
function displayCena() {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "block"
    document.getElementById("h1titulo").innerHTML = "Cena";
    document.getElementById("divMasInfo").style.display = "none"
    displayListaPlatos();

}
function displayPostre() {
    document.getElementById("divMenu").style.display = "none"
    document.getElementById("divPlatos").style.display = "block"
    document.getElementById("h1titulo").innerHTML = "Postre";
    document.getElementById("divMasInfo").style.display = "none"
    displayListaPlatos();

}

function mostrarSug() {
    var platoSug = platos.getComidas()[Math.floor(Math.random() * platos.getComidas().length)];
    document.getElementById("imgSug").src = platoSug.getImagen();
    document.getElementById("sugNom").innerHTML = platoSug.nombrePlato();
    document.getElementById("sugDif").innerHTML = platoSug.getDificultad();
    document.getElementById("sugTie").innerHTML = (platoSug.getTiempoEstimado() + " minutos");
    document.getElementById("btnSug").onclick = function () { masInfo(platoSug) };
}



document.addEventListener('DOMContentLoaded', (event) => {
    displayMenu();
});
