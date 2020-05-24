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
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Victor';
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

console.log(y);
teste(10);
