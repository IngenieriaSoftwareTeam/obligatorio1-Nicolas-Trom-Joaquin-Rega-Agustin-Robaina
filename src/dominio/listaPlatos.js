export class ListaPlatos {
  #platos;
  constructor() {
    this.#platos = [];
  }

  addComida(plato) {
    const comidList = this.#platos.some((c) =>
      c.getNombre()==plato.getNombre());
    if (!comidList ) {
      this.#platos.push(plato);
    } else {
      throw new Error('La comida ya existe');
    }
  }
  getComidas() {
    return this.#platos;
  }
}
