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

// const usuario = {
//   nome: 'Diego',
//   idade: 23,
//   endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//   },
// };

// const { nome, idade, endereco: { cidade } } = usuario;

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

// const { nome, ...resto } = usuario;

// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;

// console.log(nome);
// console.log(resto);
// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params) {
//   return params.reduce((total, next) => total + next);
// };

// console.log(soma(1, 3, 4));

//SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const usuario2 = { ...usuario, nome: 'Gabriel' };

// console.log(usuario2);

// const nome = 'Diego';
// const idade = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// const nome = 'Diego';
// const idade = 23;

// const usuario = {
//   nome,
//   idade,
//   empresa: 'Rocketseat',
// };

// console.log(usuario);

// import * as functions from './functions';
// import somaFunction from './soma';

// console.log(somaFunction(1, 2));
// console.log(functions.sub(1, 2));

// const minhaPromise = () => new Promise((resolve, reject) => { setTimeout(() => { resolve('OK') }, 2000) });

// async function executaPromise() {
//   const response = await minhaPromise();

//   console.log(response);
// }

// const executaPromise = async () => {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// };

// executaPromise();

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch (err) {
      console.warn('Erro na API');
    }
  }
}

Api.getUserInfo('victor3r');