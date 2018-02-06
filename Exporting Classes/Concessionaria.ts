//quando uso default para exportar, na hora de importar posso fazer
// "import Carro from './Carro'". Sem o default ficaria "import {Carro} from './Carro'"
import Carro from './Carro'

export default class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}