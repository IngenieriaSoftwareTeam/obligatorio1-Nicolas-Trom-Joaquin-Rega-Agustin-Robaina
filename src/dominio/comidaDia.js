export class comidaDia{
    #comidas
    constructor(){
        this.#comidas = [];
    }

    addComida(comida){
        let comidList = this.#comidas.some(c => c.getNombre() == plato.getNombre())
        if(!comidList && plato.isValid()){
            this.#comidas.push(plato);
        }else{
            throw new Error('La comida ya existe');
        }
    }
    getComidas(){  
        return this.#comidas;
    }
}