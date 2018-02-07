//se declaro uma classe que implementará uma interface,
//essa classe deverá ter todos os atributos e métodos definidos na interface

export interface DaoInterface {
    nomeTabela: string

    inserir(object: any): boolean
    atualizar(object: any): boolean
    remover(id: number): any
    selecionar(id: number): any
    selecionarTodos(): [any]
}