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

  test('Tiempo Estimado', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    const tiempoEstimado = plato.getTiempoEstimado();
    const tiempoEstimadoEsperado = 20;
    expect(tiempoEstimado).toBe(tiempoEstimadoEsperado);
  });

  test('Tiempo Cero', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 0, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getTiempoEstimado()).toBe(0);
  });

  test('Precio Negativo', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', -100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getPrecioTotal()).toBe(-100);
  });

  test('Lista Ingredientes Vacia', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getIngredientes()).toEqual([]);
  });

  test('Tipo de Plato', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getTipo()).toBe('Desayuno');
  });

  test('Imagen del plato', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getImagen()).toBe('../interfaz/img/wafflesDeArroz.jpg');
  });

  test('Calorias', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getCaloriaTotal()).toBe(1050);
  });

  test('Precio', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getPrecioTotal()).toBe(100);
  });

  test('Instrucciones', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, 'Hervir el arroz (o usar arroz que nos sobró de la comida anterior:)', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getInstrucciones()).toBe('Hervir el arroz (o usar arroz que nos sobró de la comida anterior:)');
  });  

  test('Calorias Negativo', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', 10, -1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getCaloriaTotal()).toBe(-1050);
  });

  test('Instrucciones Vacias', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, ' ', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getInstrucciones()).toBe(' ');
  });  



});
