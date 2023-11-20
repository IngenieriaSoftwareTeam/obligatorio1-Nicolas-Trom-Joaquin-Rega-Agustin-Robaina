import {Ingredientes} from '../ingredientes.js';

describe('Clase de prueba Ingredientes', () =>{
  // Pruebas getters
  test('Nombre ingrediente', () =>{
    const ingrediente = new Ingredientes('Leche', 80, 256);
    expect(ingrediente.getNombre()).toBe('Leche');
  });

  test('Precio Ingrediente', () => {
    const ingrediente = new Ingredientes('Leche', 80, 256);
    expect(ingrediente.getPrecio()).toBe(256);
  });
  test('Calorias Ingrediente', () => {
    const ingrediente = new Ingredientes('Leche', 80, 256);
    expect(ingrediente.getCaloria()).toBe(80);
  });
  // Pruebas setters
  test('Seterar nombre ingrediente', () =>{
    const ingrediente = new Ingredientes();
    ingrediente.setNombre('Leche');
    expect(ingrediente.getNombre()).toBe('Leche');
  });

  test('Seterar precio ingrediente', () =>{
    const ingrediente = new Ingredientes();
    ingrediente.setPrecio(80);
    expect(ingrediente.getPrecio()).toBe(80);
  });

  test('Seterar caloria ingrediente', () =>{
    const ingrediente = new Ingredientes();
    ingrediente.setCaloria(80);
    expect(ingrediente.getCaloria()).toBe(80);
  });

  // --------- //

  test('Prueba toString', () =>{
    const ingrediente = new Ingredientes('Leche', 80, 256);
    const pruebaToString = ingrediente.toString();
    const esperadoPruebaToString = 'Nombre: Leche - Caloria: 80 - Precio: 256';
    expect(pruebaToString).toBe(esperadoPruebaToString);
  });

  test('Prueba isValid : Calorias Ingrediente', () => {
    const ingrediente = new Ingredientes('Leche', null, 200);
    expect(() => ingrediente.isValid()).toThrow('La caloria no puede ser nulo');
  });

  test('Prueba isValid : Nombre Ingrediente', () => {
    const ingrediente = new Ingredientes(undefined, 80, 200);
    expect(() => ingrediente.isValid()).toThrow('El nombre no puede ser nulo');
  });

  test('Prueba isValid : Precio Ingrediente', () => {
    const ingrediente = new Ingredientes('Leche', 80, null);
    expect(() => ingrediente.isValid()).toThrow('El precio no puede ser nulo');
  });

  test('Prueba isValid : Todos Validos', () => {
    const ingrediente = new Ingredientes('Leche', 80, 200);
    expect(ingrediente.isValid()).toBe(true);
  });
});
