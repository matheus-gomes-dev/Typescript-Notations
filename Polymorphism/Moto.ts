import Veiculo from './Veiculo'

class Moto extends Veiculo {
    public acelerar(): void {
    	//posso alterar o atributo de Moto, mesmo o atributo estando declarado 
    	//na classe pai Veículo (polimorfismo)
        this.velocidade = this.velocidade + 20
    }
}


export default Moto