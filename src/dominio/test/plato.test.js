import {Ingredientes} from '../ingredientes.js';
import {Plato} from '../plato.js';


describe('Plato class test', () =>{
  test('Nombre Plato', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    const nombreDelPlato = plato.getNombre();
    const nombreEsperado = 'Waffles De Arroz';
    expect(nombreDelPlato).toBe(nombreEsperado);
  });

  test('Dificultad Plato', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    const nombreDelPlato = plato.getDificultad();
    const nombreEsperado = 'Media';
    expect(nombreDelPlato).toBe(nombreEsperado);
  });

  test('Tiempo Estimado', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    const tiempoEstimado = plato.getTiempoEstimado();
    const tiempoEstimadoEsperado = 20;
    expect(tiempoEstimado).toBe(tiempoEstimadoEsperado);
  });

  test('Obtener lista de ingredientes', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, ['leche', 'arróz'], true, '', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getIngredientes()).toEqual(['leche', 'arróz']);
  });

  test('Lista Ingredientes Vacia', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getIngredientes()).toEqual([]);
  });

  test('Tipo de Plato', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getTipo()).toBe('Desayuno');
  });

  test('Imagen del plato', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, '', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getImagen()).toBe('../interfaz/img/wafflesDeArroz.jpg');
  });

  test('Instrucciones', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, 'Hervir el arroz (o usar arroz que nos sobró de la comida anterior:)', 'Desayuno', 100, 1050, '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getInstrucciones()).toBe('Hervir el arroz (o usar arroz que nos sobró de la comida anterior:)');
  });

  test('Instrucciones Vacias', () => {
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.getInstrucciones()).toBe(' ');
  });

  test('Prueba toString()', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    const pruebToString = plato.toString();
    const esperadoPruebaToString = 'Nombre: Waffles De Arroz - Dificultad: Media - Tiempo: 20';
    expect(pruebToString).toBe(esperadoPruebaToString);
  });

  test('Prueba nombrePlato()', () =>{
    const plato = new Plato('Waffles De Arroz', 'Media', 20, [], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    const pruebaNombrePlato = plato.nombrePlato();
    const esperadoPruebaNombrePlato = 'Waffles De Arroz ';
    expect(pruebaNombrePlato).toBe(esperadoPruebaNombrePlato);
  });
  // Pruebas para las setters.
  test('Test setter nombre', () => {
    const objeto = new Plato();
    objeto.setNombre('valorPrueba');
    expect(objeto.getNombre()).toBe('valorPrueba');
  });
  test('Test setter dificultad', () => {
    const objeto = new Plato();
    objeto.setDificultad('valorPrueba');
    expect(objeto.getDificultad()).toBe('valorPrueba');
  });

  test('Test setter tiempoEstimado', () => {
    const objeto = new Plato();
    objeto.setTiempoEstimado(30);
    expect(objeto.getTiempoEstimado()).toBe(30);
  });

  test('Test setter ingredientes', () => {
    const objeto = new Plato();
    objeto.setIngredientes('pan');
    expect(objeto.getIngredientes()).toBe('pan');
  });

  test('Test setter favorito', () => {
    const objeto = new Plato();
    objeto.setFavorito(true);
    expect(objeto.getFavorito()).toBe(true);
  });

  test('Test setter instrucciones', () => {
    const objeto = new Plato();
    objeto.setInstrucciones('Pelar las papas, Hervir las papas');
    expect(objeto.getInstrucciones()).toBe('Pelar las papas, Hervir las papas');
  });

  test('Test setter tipo', () => {
    const objeto = new Plato();
    objeto.setTipo('Desayuno');
    expect(objeto.getTipo()).toBe('Desayuno');
  });

  test('Test setter imagen', () => {
    const objeto = new Plato();
    objeto.setImagen('../interfaz/img/wafflesDeArroz.jpg');
    expect(objeto.getImagen()).toBe('../interfaz/img/wafflesDeArroz.jpg');
  });
  // -------------  //

  test('Añadir un ingrediente a la lista de ingredientes', () =>{
    const plato = new Plato();
    const ingrediente = new Ingredientes('Pan', 80, 265 );
    plato.addIngrediente(ingrediente);
    const expectedLength = 1;
    expect(plato.getIngredientes().length).toBe(expectedLength);
  });

  test('Obtener nombres de ingredientes', () =>{
    const plato = new Plato();
    const ingrediente1 = new Ingredientes('Pan', 80, 265 );
    const ingrediente2 = new Ingredientes('Leche', 80, 100 );
    plato.addIngrediente(ingrediente1);
    plato.addIngrediente(ingrediente2);
    expect(plato.nombresIngredientes()).toEqual(['Pan', 'Leche']);
  });

  // Pruebas isValid()
  test('Prueba isValid : Nombre Plato', () => {
    const plato = new Plato(null, 'Media', 20, ['Arroz', 'Huevo'], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Nombre no puede ser nulo');
  });
  test('Prueba isValid : Dificultad Plato', () => {
    const plato = new Plato('Waffles de Arroz', null, 20, ['Arroz', 'Huevo'], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Dificultad no puede ser vacio');
  });
  test('Prueba isValid : Tiempo Estimado Plato', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', null, ['Arroz', 'Huevo'], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Tiempo estimado no puede ser vacio');
  });
  test('Prueba isValid : Ingredientes', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', 20, [], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Ingredientes no puede ser vacio');
  });
  test('Prueba isValid : Favorito Plato', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', 20, ['Arroz', 'Huevo'], null, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Favorito no puede ser NULL');
  });
  test('Prueba isValid : Instrucciones Plato', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', 20, ['Arroz', 'Huevo'], true, null, 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Instrucciones no puede ser NULL');
  });
  test('Prueba isValid : Tipo', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', 20, ['Arroz', 'Huevo'], true, ' ', null, '../interfaz/img/wafflesDeArroz.jpg');
    expect(() => plato.isValid()).toThrow('Tipo no puede ser NULL');
  });
  test('Prueba isValid : Imagen Plato', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', 20, ['Arroz', 'Huevo'], true, ' ', 'Desayuno', null);
    expect(() => plato.isValid()).toThrow('Imagen no puede ser vacio');
  });
  test('Prueba isValid : Todos Validos', () => {
    const plato = new Plato('Waffles de Arroz', 'Media', 20, ['Arroz', 'Huevo'], true, ' ', 'Desayuno', '../interfaz/img/wafflesDeArroz.jpg');
    expect(plato.isValid()).toBe(true);
  });
});
