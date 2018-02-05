class Carro {
	private modelo: string // Attribute
	private numeroDePortas: number // Attribute
	private velocidade: number = 0 // Attribute

	constructor(modelo: string, numeroDePortas: number){ //constructor is where I define how parameters are set when I instantiate my object
		this.modelo = modelo
		this.numeroDePortas = numeroDePortas
	}

	public acelerar(): void{ //Method
		this.velocidade = this.velocidade + 10
	}

	public parar(): void{ //Method
		this.velocidade = 0
	}

	public velocidadeAtual(): number{ //Method
		return this.velocidade
	}
}

/*
let carroA = new Carro('Veloster', 3) // instantiating object
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
console.log(carroA.modelo) //error: modelo is a private attribute: I can access only within my Object
*/

class Concessionaria{
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string){
    	this.endereco = endereco
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): any{
        return this.listaDeCarros
    }
}

let concessionaria = new Concessionaria('Av Paulista');
console.log(concessionaria)

class Person{
	private name: string
	private favoriteCar: string
	private car: any

	constructor(name: string, favoriteCar: string){
		this.name = name
		this.favoriteCar = favoriteCar
	}

	public sayName(): string{
		return this.name
	}

	public sayFavoriteCar(): string{
		return this.favoriteCar
	}

	public buyCar(car: any): void{
		this.car = car
	}

	public sayCarsOwn(): any{
		return this.car
	}
}

let person = new Person('Joseph', 'Veloster')
console.log(person.sayFavoriteCar())