export default class Veiculo {
    protected modelo: string //quando uso protected, atributo pode ser utilizado por filhos
    private velocidade: number = 0

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}