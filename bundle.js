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
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome);
  console.log(idade);
  console.log(cidade);
}

mostraNome(usuario);
