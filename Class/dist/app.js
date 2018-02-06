"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0; // Attribute
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
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
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Person = /** @class */ (function () {
    function Person(name, favoriteCar) {
        this.name = name;
        this.favoriteCar = favoriteCar;
    }
    Person.prototype.sayName = function () {
        return this.name;
    };
    Person.prototype.sayFavoriteCar = function () {
        return this.favoriteCar;
    };
    Person.prototype.buyCar = function (car) {
        this.car = car;
    };
    Person.prototype.sayCarsOwn = function () {
        return this.car;
    };
    return Person;
}());
var person = new Person('Joseph', 'Veloster');
console.log(person.sayFavoriteCar());
/* --- criar carros ---*/
var carroA = new Carro('dodge journey', 4);
var carroB = new Carro('veloster', 3);
var carroC = new Carro('cerato', 4);
/* --- montar a lista de carros da concessionária --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
var cliente = new Person('Peter', 'veloster');
console.log(cliente.sayCarsOwn());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.sayFavoriteCar())
        cliente.buyCar(carro);
});
console.log(cliente.sayCarsOwn());
