"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }
// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = 'Diego';
//   }
//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = () => {
//   MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario();
// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }
// console.log(Matematica.soma(1, 2));
// 
// const arr = [1, 3, 4, 5, 8, 9];
// const newArr = arr.map((item, index) => item + index);
// console.log(newArr);
// const sum = arr.reduce((total, next) => total + next);
// console.log(sum);
// const filter = arr.filter(item => item % 2 === 0);
// console.log(filter);
// const find = arr.find(item => item === 4);
// console.log(find);
// const teste = () => ({ nome: 'Diego' });
// console.log(teste());
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));
// console.log(soma());
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostraNome({ nome, idade, endereco: { cidade } }) {
//   console.log(nome);
//   console.log(idade);
//   console.log(cidade);
// }
// mostraNome(usuario);
//REST

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(nome);
console.log(resto);
console.log(a);
console.log(b);
console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

;
console.log(soma(1, 3, 4)); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: 'Gabriel'
});

console.log(usuario2);
