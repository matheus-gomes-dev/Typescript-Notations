"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var carro = new Carro_1.default('velost', 3);
carro.acelerar();
carro.acelerar();
var moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);