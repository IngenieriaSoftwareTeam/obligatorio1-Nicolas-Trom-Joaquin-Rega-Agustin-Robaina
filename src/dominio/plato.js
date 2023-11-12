export class plato{
    #nombre
    #dificultad
    #tiempoEstimado
    #ingredientes
    #favorito
    #instrucciones
    #tipo
    #precioTotal
    #caloriaTotal
    #imgen

    constructor(nombre, dificultad, tiempoEstimado, ingredientes, favorito, instrucciones, tipo, precioTotal, caloriaTotal,imgen){
        this.#nombre = nombre
        this.#dificultad = dificultad
        this.#tiempoEstimado = tiempoEstimado
        this.#ingredientes = ingredientes
        this.#favorito = favorito
        this.#instrucciones = instrucciones
        this.#tipo = tipo
        this.#precioTotal = precioTotal
        this.#caloriaTotal = caloriaTotal
        this.#imgen = imgen
    }
    getNombre(){
        return this.#nombre
    }
    setNombre(nombre){
        this.#nombre = nombre
    }
    getDificultad(){
        return this.#dificultad
    }
    setDificultad(dificultad){
        this.#dificultad = dificultad
    }
    getTiempoEstimado(){
        return this.#tiempoEstimado
    }
    setTiempoEstimado(tiempoEstimado){
        this.#tiempoEstimado = tiempoEstimado
    }
    getIngredientes(){
        return this.#ingredientes
    }
    setIngredientes(ingredientes){
        this.#ingredientes = ingredientes
    }
    getFavorito(){
        return this.#favorito
    }
    setFavorito(favorito){
        this.#favorito = favorito
    }
    getInstrucciones(){
        return this.#instrucciones
    }
    setInstrucciones(instrucciones){
        this.#instrucciones = instrucciones
    }
    getTipo(){
        return this.#tipo
    }
    setTipo(tipo){
        this.#tipo = tipo
    }
    getPrecioTotal(){
        return this.#precioTotal
    }
    setPrecioTotal(precioTotal){
        this.#precioTotal = precioTotal
    }
    getCaloriaTotal(){
        return this.#caloriaTotal
    }
    setCaloriaTotal(caloriaTotal){
        this.#caloriaTotal = caloriaTotal
    }
    getImagen(){
        return this.#imgen
    }
    setImagen(imgen){
        this.#imgen = imgen
    }

   toString(){
        return `Nombre: ${this.#nombre} - Dificultad: ${this.#dificultad} - Tiempo: ${this.#tiempoEstimado} Minuto(s) - Precio: ${this.#precioTotal} Peso(s)`
    }
    nombrePlato(){
        return `Nombre: ${this.#nombre} `
    }

    
}