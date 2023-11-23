import {ListaPlatos} from '../listaPlatos';
import {Plato} from '../plato';

describe('Pruebas clase listaPlatos', () =>{
  test('Prueba length 1', () =>{
    const lstplato = new ListaPlatos();
    const plato = new Plato('Waffles De Arroz', 'Media', 20, ['Huevos'], true, 'Hervir', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    lstplato.addComida(plato);
    const expectedLength = 1;
    expect(lstplato.getComidas().length).toBe(expectedLength);
  });
  test('Prueba add Comida Mismo Nombre', () =>{
    const lstplato = new ListaPlatos();
    const plato = new Plato('Waffles De Arroz', 'Media', 20, ['Huevos'], true, 'Hervir', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    lstplato.addComida(plato);
    const errorEsperado = 'La comida ya existe';
    expect(() => lstplato.addComida(plato)).toThrow(errorEsperado);
  });
});
