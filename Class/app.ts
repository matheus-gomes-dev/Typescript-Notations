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
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
    	this.endereco = endereco
    	this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
}



class Person{
	private name: string
	private favoriteCar: string
	private car: Carro

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

	public buyCar(car: Carro): void{
		this.car = car
	}

	public sayCarsOwn(): Carro{
		return this.car
	}
}

let person = new Person('Joseph', 'Veloster')
console.log(person.sayFavoriteCar())

/* --- criar carros ---*/

let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 3);
let carroC = new Carro('cerato', 4);


/* --- montar a lista de carros da concessionária --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());

/* --- comprar o carro --- */
let cliente = new Person('Peter', 'veloster')
console.log(cliente.sayCarsOwn())
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
	if(carro['modelo'] == cliente.sayFavoriteCar())
		cliente.buyCar(carro)
})
console.log(cliente.sayCarsOwn())