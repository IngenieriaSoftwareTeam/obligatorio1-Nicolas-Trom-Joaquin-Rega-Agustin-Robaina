import {Plato} from '../dominio/plato.js';
import {ListaPlatos} from '../dominio/listaPlatos.js';
import {Ingredientes} from '../dominio/ingredientes.js';


const platos = new ListaPlatos();

// Lista ingredientes

function agregarComida() {
  const nombre = document.getElementById('Name').value;
  const dificultad = document.getElementById('dificultad').value;
  const tiempoEstimado = document.getElementById('tiempoEstimado').value;
  const aryIngredientes=document.getElementById('ingredientes').value.split('\n');
  const aryInstrucciones = document.getElementById('instrucciones').value.split('\n');

  const tipo = document.getElementById('tipoComida').value;
  const imgen = document.getElementById('imagen').value;

  const nuevoPlato = new Plato(nombre, dificultad, tiempoEstimado, [], false, '', tipo, imgen);
  for (let i = 0; i < aryIngredientes.length; i++) {
    const pairs = aryIngredientes[i].split(',');

    const ingredientCaloriePairs = pairs.map((pair) => pair.trim());

    for (let j = 0; j < ingredientCaloriePairs.length; j += 3) {
      const ingredient = ingredientCaloriePairs[j];
      const precio = parseFloat(ingredientCaloriePairs[j + 1]);
      const calories = parseFloat(ingredientCaloriePairs[j + 2]);
      const ingrediente10 = new Ingredientes(ingredient, calories, precio);
      nuevoPlato.addIngrediente(ingrediente10);
    }
  }
  for (let i=0; i<aryInstrucciones.length; i++) {
    nuevoPlato.setInstrucciones(aryInstrucciones);
  }
  console.log(nuevoPlato);

  platos.addComida(nuevoPlato);
  alert('Plato agregado con exito');
}
// Lista platos
const plato1 = new Plato('Waffles De Arroz', 'Media', 20, [], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
const plato2 = new Plato('Yogurt con Granola', 'Media', 10, [], true, ' ', 'Desayuno', '../interfaz/img/yogurtConGranola.jpg');
const plato3 = new Plato('Berenjenas Rellenas de Atun', 'Alta', 80, [], false, ' ', 'Almuerzo', '../interfaz/img/berenjenasRellenasAtun.jpg');
const plato4 = new Plato('Milanesa', 'Media', 30, [], false, ' ', 'Almuerzo', '../interfaz/img/milanesa.png');
const plato5 = new Plato('Galletas de Avena', 'Alta', 60, [], false, ' ', 'Merienda', '../interfaz/img/galletasDeAvena.jpg');
// Receta 1
const azucar = new Ingredientes('Azúcar', 60, 60);
const huevo = new Ingredientes('Huevo', 5, 150);
const arroz = new Ingredientes('Arroz', 71, 130);
const leche = new Ingredientes('Leche', 42, 150);
plato1.addIngrediente(huevo);
plato1.addIngrediente(leche);
plato1.addIngrediente(arroz);
plato1.addIngrediente(azucar);

// Receta 2
const yogurt = new Ingredientes('Yogurt', 77, 59);
const granola = new Ingredientes('Granola', 213, 417);
const frutosRojos = new Ingredientes('Frutos rojos', 215, 69);
plato2.addIngrediente(yogurt);
plato2.addIngrediente(granola);
plato2.addIngrediente(frutosRojos);

// Receta 3
const berenjenas = new Ingredientes('Berenjenas', 119, 25);
const atun = new Ingredientes('Atún', 259, 130);
const cebolla = new Ingredientes('Cebolla', 89, 40);
const salsaTomate = new Ingredientes('Salsa de tomate', 78, 29);
const quesoRallado = new Ingredientes('Queso rallado', 130, 110);
const sal = new Ingredientes('Sal', 66, 0);
const pimienta = new Ingredientes('Pimienta', 69, 0);
const aceite = new Ingredientes('Aceite', 97, 888);
plato3.addIngrediente(berenjenas);
plato3.addIngrediente(atun);
plato3.addIngrediente(cebolla);
plato3.addIngrediente(salsaTomate);
plato3.addIngrediente(quesoRallado);
plato3.addIngrediente(sal);
plato3.addIngrediente(pimienta);
plato3.addIngrediente(aceite);

// Receta  4
const carneNalga = new Ingredientes('Carne Nalga', 399, 129);
const perejil = new Ingredientes('Perejil', 36, 36);
const ajo = new Ingredientes('Ajo', 73, 149);
const maicena = new Ingredientes('Maicena', 70, 381);
const rebozadoSinTACC = new Ingredientes('Rebzado sin TACC(de Arroz)', 100, 256);
plato4.addIngrediente(carneNalga);
plato4.addIngrediente(perejil);
plato4.addIngrediente(ajo);
plato4.addIngrediente(maicena);
plato4.addIngrediente(rebozadoSinTACC);
plato4.addIngrediente(huevo);
plato4.addIngrediente(sal);
plato4.addIngrediente(pimienta);

// Receta 5
const avena = new Ingredientes('Avena', 63, 68);
const esenciaVainilla = new Ingredientes('Esencia de Vainilla', 142, 288);
const canela = new Ingredientes('Canela', 96, 247);
const harina = new Ingredientes('Harina Sin Gluten', 135, 381);
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

document.getElementById('btnMen').addEventListener('click', displayMenu);
document.getElementById('btnFav').addEventListener('click', displayFavoritos);
document.getElementById('btnDes').addEventListener('click', displayDesayuno);
document.getElementById('btnAlm').addEventListener('click', displayAlmuerzo);
document.getElementById('btnMer').addEventListener('click', displayMerienda);
document.getElementById('btnCen').addEventListener('click', displayCena);
document.getElementById('btnPos').addEventListener('click', displayPostre);
document.getElementById('btnfiltro').addEventListener('click', actListas);
document.getElementById('btnAgregar').addEventListener('click', displayAgrgarPlato);
document.getElementById('btnAgregar10').addEventListener('click', agregarComida);


function masInfo(plato) {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'none';
  document.getElementById('divMasInfo').style.display = 'block';
  document.getElementById('MasInfoTitulo').innerHTML = plato.nombrePlato();
  const imagen = document.getElementById('MasInfoImg');
  imagen.src = plato.getImagen();
  imagen.alt = 'Imagen platos';
  const ingredientes = plato.getIngredientes();
  document.getElementById('ListaIngredientes').innerHTML = '';
  document.getElementById('ListaReceta').innerHTML = '';

  for (let i = 0; i < ingredientes.length; i++) {
    const li = document.createElement('li');
    li.className = 'list-group-item border-0';
    li.style = 'background-color: #14C864;';
    li.textContent = ingredientes[i].toString();
    document.getElementById('ListaIngredientes').appendChild(li);
  }
  const receta = plato.getInstrucciones();
  for (let i = 0; i < receta.length; i++) {
    const li = document.createElement('li');
    li.className = 'list-group-item border-0';
    li.style = 'background-color: #14C864;';
    li.textContent = receta[i].toString();
    document.getElementById('ListaReceta').appendChild(li);
  }
  const btnEstrella = document.getElementById('btnFavMasInfo');
  const imgEstrella = document.getElementById('imgFavMasInfo');
  if (plato.getFavorito()) {
    imgEstrella.src = 'img/EstrellaAmarilla.png';
    btnEstrella.onclick = function() {
      plato.setFavorito(false);
      masInfo(plato);
    };
  } else {
    imgEstrella.src = 'img/EstrellaBlanca.png';
    btnEstrella.onclick = function() {
      plato.setFavorito(true);
      masInfo(plato);
    };
  }
}

function actListas() {
  if ('Favoritos' == document.getElementById('h1titulo').innerHTML) {
    displaylistafavs();
  } else {
    displayListaPlatos();
  }
}
function difANum(dif) {
  let ret = 1;
  if (dif == 'Alta') {
    ret = 3;
  }
  if (dif == 'Media') {
    ret = 2;
  }
  return ret;
}
function displaylistafavs() {
  document.getElementById('listaPlatos').innerHTML = '';
  if (document.getElementById('OrdenarLista').value == 'MayAMenDif') {
    platos.getComidas().sort(function(a, b) {
      return difANum(b.getDificultad()) - difANum(a.getDificultad());
    });
  }
  if (document.getElementById('OrdenarLista').value == 'MenAMayDif') {
    platos.getComidas().sort(function(a, b) {
      return difANum(a.getDificultad()) - difANum(b.getDificultad());
    });
  }
  if (document.getElementById('OrdenarLista').value == 'MayAMenTie') {
    platos.getComidas().sort(function(a, b) {
      return b.getTiempoEstimado() - a.getTiempoEstimado();
    },
    );
  }
  if (document.getElementById('OrdenarLista').value == 'MenAMayTie') {
    platos.getComidas().sort(function(a, b) {
      return a.getTiempoEstimado() - b.getTiempoEstimado();
    });
  }
  platos.getComidas().forEach((plato) => {
    if ('Favoritos' == document.getElementById('h1titulo').innerHTML && plato.getFavorito()) {
      if ((plato.getDificultad() == 'Poca' && document.getElementById('DifPoca').checked) ||
         (plato.getDificultad() == 'Media' && document.getElementById('DifMedia').checked) ||
         (plato.getDificultad() == 'Alta' && document.getElementById('DifAlta').checked)) {
        if ((document.getElementById('FiltroTiempoMay').checked && plato.getTiempoEstimado() >= document.getElementById('rangeTiempo').value) ||
    (document.getElementById('FiltroTiempoMen').checked && plato.getTiempoEstimado() <= document.getElementById('rangeTiempo').value)) {
          const platoElem = document.createElement('li');
          platoElem.className = 'text-center';
          const listaUsada = document.createElement('ul');
          listaUsada.className = 'list-group list-group-horizontal';
          const imgPlato = document.createElement('img');
          imgPlato.src = plato.getImagen();
          imgPlato.style = 'max-height: 175px;';
          imgPlato.className = 'rounded mx-auto d-block';

          const toStringPlato = document.createElement('p');
          toStringPlato.textContent = plato.toString();
          toStringPlato.className = 'mt-4';
          const nombrePlato = document.createElement('h3');
          nombrePlato.textContent = plato.nombrePlato();
          nombrePlato.style = 'padding-top:10px;';
          const btnMasInfo = document.createElement('button');
          const btnEstrella = document.createElement('button');
          btnMasInfo.type = 'button';
          const imgEstrella = document.createElement('img');
          if (plato.getFavorito()) {
            imgEstrella.src = 'img/EstrellaAmarilla.png';
            btnEstrella.onclick = function() {
              plato.setFavorito(false);
              actListas();
            };
          } else {
            imgEstrella.src = 'img/EstrellaBlanca.png';
            btnEstrella.onclick = function() {
              plato.setFavorito(true);
              actListas();
            };
          }
          btnEstrella.appendChild(imgEstrella);
          btnEstrella.className = 'btn btn-default';
          imgEstrella.style = 'width:30px; height:30px;';
          btnMasInfo.className = 'btn btn-default';
          btnMasInfo.textContent = 'Mas Info';
          platoElem.appendChild(listaUsada);
          const Seccionimg = document.createElement('li');
          Seccionimg.appendChild(imgPlato);
          Seccionimg.style = 'width:10%;';
          listaUsada.appendChild(Seccionimg);
          Seccionimg.className = 'list-group-item border-0';
          const SeccionInfo = document.createElement('li');
          const divInfoSup = document.createElement('div');
          const divInfo = document.createElement('div');
          listaUsada.appendChild(SeccionInfo);
          divInfo.className = '';
          SeccionInfo.appendChild(divInfoSup);
          divInfoSup.appendChild(divInfo);
          SeccionInfo.className = 'list-group-item border-0';
          SeccionInfo.style = 'width: 90%;';
          divInfo.appendChild(nombrePlato);
          divInfo.appendChild(toStringPlato);
          divInfo.appendChild(btnMasInfo);
          divInfo.appendChild(btnEstrella);
          divInfoSup.className = 'rounded';
          divInfoSup.style = 'background-color: #8AE4B2; height: 175px;';
          btnMasInfo.onclick = function() {
            masInfo(plato);
          };

          document.getElementById('listaPlatos').appendChild(platoElem);
        }
      }
    }
  });
}

function displayListaPlatos() {
  document.getElementById('listaPlatos').innerHTML = '';
  if (document.getElementById('OrdenarLista').value == 'MayAMenDif') {
    platos.getComidas().sort(function(a, b) {
      return difANum(b.getDificultad()) - difANum(a.getDificultad());
    });
  }
  if (document.getElementById('OrdenarLista').value == 'MenAMayDif') {
    platos.getComidas().sort(function(a, b) {
      return difANum(a.getDificultad()) - difANum(b.getDificultad());
    });
  }
  if (document.getElementById('OrdenarLista').value == 'MayAMenTie') {
    platos.getComidas().sort(function(a, b) {
      return b.getTiempoEstimado() - a.getTiempoEstimado();
    });
  }
  if (document.getElementById('OrdenarLista').value == 'MenAMayTie') {
    platos.getComidas().sort(function(a, b) {
      return a.getTiempoEstimado() - b.getTiempoEstimado();
    });
  }
  platos.getComidas().forEach((plato) => {
    if (plato.getTipo() == document.getElementById('h1titulo').innerHTML) {
      if ((plato.getDificultad() == 'Poca' && document.getElementById('DifPoca').checked) ||
        (plato.getDificultad() == 'Media' && document.getElementById('DifMedia').checked) ||
        (plato.getDificultad() == 'Alta' && document.getElementById('DifAlta').checked)) {
        if ((document.getElementById('FiltroTiempoMay').checked && plato.getTiempoEstimado() >= document.getElementById('rangeTiempo').value) ||
       (document.getElementById('FiltroTiempoMen').checked && plato.getTiempoEstimado() <= document.getElementById('rangeTiempo').value)) {
          const platoElem = document.createElement('li');
          platoElem.className = 'text-center';
          const listaUsada = document.createElement('ul');
          listaUsada.className = 'list-group list-group-horizontal';
          const imgPlato = document.createElement('img');
          imgPlato.src = plato.getImagen();
          imgPlato.style = 'max-height: 175px;';
          imgPlato.className = 'rounded mx-auto d-block';

          const toStringPlato = document.createElement('p');
          toStringPlato.textContent = plato.toString();
          toStringPlato.className = 'mt-4';
          const nombrePlato = document.createElement('h3');
          nombrePlato.textContent = plato.nombrePlato();
          nombrePlato.style = 'padding-top:10px;';
          const btnMasInfo = document.createElement('button');
          const btnEstrella = document.createElement('button');
          const imgEstrella = document.createElement('img');
          if (plato.getFavorito()) {
            imgEstrella.src = 'img/EstrellaAmarilla.png';
            btnEstrella.onclick = function() {
              plato.setFavorito(false);
              actListas();
            };
          } else {
            imgEstrella.src = 'img/EstrellaBlanca.png';
            btnEstrella.onclick = function() {
              plato.setFavorito(true);
              actListas();
            };
          }

          btnMasInfo.onclick = function() {
            masInfo(plato);
          };
          btnEstrella.appendChild(imgEstrella);
          btnEstrella.className = 'btn btn-default';
          imgEstrella.style = 'width:30px; height:30px;';
          btnMasInfo.className = 'btn btn-default';
          btnMasInfo.textContent = 'Mas Info';
          platoElem.appendChild(listaUsada);
          const Seccionimg = document.createElement('li');
          Seccionimg.appendChild(imgPlato);
          Seccionimg.style = 'width:10%;';
          listaUsada.appendChild(Seccionimg);
          Seccionimg.className = 'list-group-item border-0';
          const SeccionInfo = document.createElement('li');
          const divInfoSup = document.createElement('div');
          const divInfo = document.createElement('div');
          listaUsada.appendChild(SeccionInfo);
          divInfo.className = '';
          SeccionInfo.appendChild(divInfoSup);
          divInfoSup.appendChild(divInfo);
          SeccionInfo.className = 'list-group-item border-0';
          SeccionInfo.style = 'width: 90%;';
          divInfo.appendChild(nombrePlato);
          divInfo.appendChild(toStringPlato);
          divInfo.appendChild(btnMasInfo);
          divInfo.appendChild(btnEstrella);
          divInfoSup.className = 'rounded';
          divInfoSup.style = 'background-color: #8AE4B2; height: 175px;';

          document.getElementById('listaPlatos').appendChild(platoElem);
        }
      }
    }
  });
}

function displayMenu() {
  document.getElementById('divMenu').style.display = 'block';
  document.getElementById('divPlatos').style.display = 'none';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  mostrarSug();
}
function displayFavoritos() {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'block';
  document.getElementById('h1titulo').innerHTML = 'Favoritos';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  displaylistafavs();
}
function displayDesayuno() {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'block';
  document.getElementById('h1titulo').innerHTML = 'Desayuno';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  displayListaPlatos();
}
function displayAlmuerzo() {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'block';
  document.getElementById('h1titulo').innerHTML = 'Almuerzo';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  displayListaPlatos();
}
function displayMerienda() {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'block';
  document.getElementById('h1titulo').innerHTML = 'Merienda';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  displayListaPlatos();
}
function displayCena() {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'block';
  document.getElementById('h1titulo').innerHTML = 'Cena';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  displayListaPlatos();
}
function displayPostre() {
  document.getElementById('divMenu').style.display = 'none';
  document.getElementById('divPlatos').style.display = 'block';
  document.getElementById('h1titulo').innerHTML = 'Postre';
  document.getElementById('divMasInfo').style.display = 'none';
  document.getElementById('divAgregarPlato').style.display = 'none';
  displayListaPlatos();
}
function displayAgrgarPlato() {
  document.getElementById('divMenu').style.display='none';
  document.getElementById('divPlatos').style.display='none';
  document.getElementById('divAgregarPlato').style.display='block';
  document.getElementById('divMasInfo').style.display='none';
}

function mostrarSug() {
  const platoSug = platos.getComidas()[Math.floor(Math.random() * platos.getComidas().length)];
  document.getElementById('imgSug').src = platoSug.getImagen();
  document.getElementById('sugNom').innerHTML = platoSug.nombrePlato();
  document.getElementById('sugDif').innerHTML = platoSug.getDificultad();
  document.getElementById('sugTie').innerHTML = (platoSug.getTiempoEstimado() + ' minutos');
  document.getElementById('btnSug').onclick = function() {
    masInfo(platoSug);
  };
}


document.addEventListener('DOMContentLoaded', (event) => {
  displayMenu();
});
