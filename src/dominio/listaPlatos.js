export class listaPlatos{

    #platos
    constructor(){
        this.#platos = [];
    }

    addComida(comida){
        let comidList = this.#platos.some(c => c.getNombre() == plato.getNombre())
        if(!comidList && plato.isValid()){
            this.#platos.push(plato);
        }else{
            throw new Error('La comida ya existe');
        }
    }
    getComidas(){  
        return this.#platos;
    }
}