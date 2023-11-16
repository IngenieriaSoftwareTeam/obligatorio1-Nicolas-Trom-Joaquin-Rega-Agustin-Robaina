import {Plato} from '../plato.js';


describe('Plato class test', () =>{
  test('Nombre Plato', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    const nombreDelPlato = plato.getNombre();
    const nombreEsperado = 'Waffles De Arroz';
    expect(nombreDelPlato).toBe(nombreEsperado);
  });

  test('Dificultad Plato', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    const nombreDelPlato = plato.getDificultad();
    const nombreEsperado = 'Media';
    expect(nombreDelPlato).toBe(nombreEsperado);
  });
});
