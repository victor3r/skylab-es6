"use strict";

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
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma());
