export class ingredientes{
    #nombre
    #precio
    #caloria


    constructor(nombre, caloria ,precio){
        this.#nombre = nombre
        this.#precio = precio
        this.#caloria = caloria
    }   
    getNombre(){
        return this.#nombre
    }
    setNombre(nombre){
        this.#nombre = nombre
    }
    

    getCaloria(){
        return this.#caloria
    }
    setCaloria(caloria){
        this.#caloria = caloria
    }
    getPrecio(){
        return this.#precio
    }
    setPrecio(precio){  
        this.#precio = precio
    }

    toString(){
        return `Nombre: ${this.#nombre} - Caloria: ${this.#caloria} - Precio: ${this.#precio}`
    }

    isValid(){
        if(this.#nombre === undefined || this.#nombre === null || this.#nombre === ''){ 
        throw new Error('El nombre no puede ser nulo')
    }

        if(this.#caloria === undefined || this.#caloria === null || this.#caloria === ''){
            throw new Error('La caloria no puede ser nulo')
        }
        if(this.#precio === undefined || this.#precio === null || this.#precio === ''){
            throw new Error('El precio no puede ser nulo')
        }
        return true
    }

}
