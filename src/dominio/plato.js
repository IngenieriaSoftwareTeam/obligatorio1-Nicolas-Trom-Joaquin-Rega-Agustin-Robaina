export class Plato {
  #nombre;
  #dificultad;
  #tiempoEstimado;
  #ingredientes;
  #favorito;
  #instrucciones;
  #tipo;
  #precioTotal;
  #caloriaTotal;
  #imgen;

  constructor(nombre, dificultad, tiempoEstimado,
      ingredientes, favorito, instrucciones, tipo,
      imgen) {
    this.#nombre = nombre;
    this.#dificultad = dificultad;
    this.#tiempoEstimado = tiempoEstimado;
    this.#ingredientes = ingredientes || [];
    this.#favorito = favorito;
    this.#instrucciones = instrucciones;
    this.#tipo = tipo;
    this.#imgen = imgen;
  }

  isValid() {
    if (this.#nombre === null ||
      this.#nombre === undefined ||
      this.#nombre === '') {
      throw new Error('Nombre no puede ser nulo');
    }

    if (this.#dificultad === null ||
      this.#dificultad === undefined ||
      this.#dificultad === '') {
      throw new Error('Dificultad no puede ser vacio');
    }
    if (this.#tiempoEstimado == null ||
      this.#tiempoEstimado == undefined ||
      this.#tiempoEstimado == '') {
      throw new Error('Tiempo estimado no puede ser vacio');
    }
    if (this.#tipo === null ||
      this.#tipo === undefined ||
      this.#tipo === '') {
      throw new Error('Tipo no puede ser NULL');
    }
    if (this.#imgen === null ||
      this.#imgen === undefined ||
      this.#imgen === '') {
      throw new Error('Imagen no puede ser vacio');
    }
    if (this.#ingredientes === null ||
      this.#ingredientes === undefined ||
      this.#ingredientes === '' ||
      this.#ingredientes.length === 0) {
      throw new Error('Ingredientes no puede ser vacio');
    }
    if (this.#favorito === null ||
      this.#favorito === undefined ||
      this.#favorito === '') {
      throw new Error('Favorito no puede ser NULL');
    }
    if (this.#instrucciones === null ||
      this.#instrucciones === undefined ||
      this.#instrucciones === '') {
      throw new Error('Instrucciones no puede ser NULL');
    }
    return true;
  }

  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getDificultad() {
    return this.#dificultad;
  }
  setDificultad(dificultad) {
    this.#dificultad = dificultad;
  }
  getTiempoEstimado() {
    return this.#tiempoEstimado;
  }

  setTiempoEstimado(tiempo) {
    this.#tiempoEstimado = tiempo;
  }

  addIngrediente(ingrediente) {
    this.#ingredientes.push(ingrediente);
  }
  getIngredientes() {
    return this.#ingredientes;
  }
  setIngredientes(ingredientes) {
    this.#ingredientes = ingredientes;
  }
  getFavorito() {
    return this.#favorito;
  }
  setFavorito(favorito) {
    this.#favorito = favorito;
  }
  getInstrucciones() {
    return this.#instrucciones;
  }
  setInstrucciones(instrucciones) {
    this.#instrucciones = instrucciones;
  }
  getTipo() {
    return this.#tipo;
  }
  setTipo(tipo) {
    this.#tipo = tipo;
  }
  getImagen() {
    return this.#imgen;
  }
  setImagen(imgen) {
    this.#imgen = imgen;
  }

  toString() {
    return `Nombre: ${this.#nombre} - Dificultad: ${this.#dificultad} - Tiempo: ${this.#tiempoEstimado}`;
  }
  nombrePlato() {
    return `${this.#nombre} `;
  }

  nombresIngredientes() {
    const nombres = [];
    this.#ingredientes.forEach((ingrediente) => {
      nombres.push(ingrediente.getNombre());
    });
    return nombres;
  }
}
