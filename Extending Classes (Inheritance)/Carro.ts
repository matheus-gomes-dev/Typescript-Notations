import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        super() //preciso dessa declaração para o programa entender que estou puxando atributos de outra classe
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}