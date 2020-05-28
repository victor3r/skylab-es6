<h1 align="center">
<br>
  <img src="https://miro.medium.com/max/4044/1*_WMfRmxXrhCcao73RHF83Q.png" alt="JavaScript" width="120">
<br>
<br>
EcmaScript 6
</h1>

O JavaScript ES6 traz nova sintaxe e novos recursos impressionantes para tornar seu código mais moderno e legível. Ele permite que você escreva menos código e faça mais. O ES6 nos apresenta muitos recursos excelentes, como funções de seta, sequências de modelos, destruição de classe, Módulos ... e muito mais.

## Ambiente

Precisaremos do **babel** para converter o nosso código JavaScript para uma versão em que todos os navegadores entendem.

Porque há navegadores que ainda não suportam as novas versões do ecmascript (es6+)

## Instalação

```bash
yarn init
yarn add @babel/cli
yarn add @babel/preset-env
yarn add @babel/core
```

## Configuração

Criar ficheiro .babelrc e adicionar:

```json
{
  "presets": ["@babel/preset-env"]
}
```

---

## Class

```js
class todoList() {
  constructor() {
  }

  parametro() {
  }
}
```

onde:

**class** - define que é uma classe
**constructor** - primeiro parámetro que é executado pela classe
**parametro** - parámetro (nomeação a sua escolha) que pode executar uma função

---

## Const e let

Formas de declarar variáveis, mas para funcionalidades diferentes.

```js
const nome = 'Victor';
nome = 'Victor'; // retorna erro

let idade = 22;
```

onde:

**const** - declarar uma variável que não pode ser mudada (constante)
**let** - muito semelhante ao **var**, mas o seu valor só é visível no seu escopo

---

## Operações com array

```js
// Percorre todo o nosso vetor e indentifica a posição
.map(function(item, index) {})

// forma de consumir todo o nosso vetor e transformar em uma única variável, geralment números

.reduce(function(total, next) {})

// Filtrar algo no vetor

.filter(function(item) {})

// Utilizado para verificar se uma certa info existe no array

const find = arr.find(function(item) {})
```

---

## Arrow function

Sintaxe mais limpa para se criar uma function.

```js
function soma(a, b) {
  console.log(a + b)
}

soma(1, 2) // retorna 3

// ou

const multiplicacao = (a, b) {
  console.log(a + b)
}

multiplicacao(1, 3) // retorna 3
```

---

## Valores padrão

É básicamente adicionar valores padrão nos parámetros das funções

```js
function soma(a = 3, b = 6) {
  return a + b; // 9
}

// ou

const soma = (a = 3, b = 6) => a + b; // 9
```

---

## Desestruturação

Chamar propriedades de forma fácil

```js
const usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

console.log(usuario.nome);
console.log(usuario.idade);

// ou com desestruturação

const { nome, idade } = usuario;
console.log(nome, idade);
```

---

## Operadores rest/spread

```bash
yarn add @babel/plugin-object-proposal-rest-spread
```

### rest

serve para pegar o resto das propriedades

```js
// Rest

const usuario = {
  nome: 'Diego'
  idade: 23
  empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
```

onde:

**...nomeDaVariável** - indica aonde vai ser armazenada o resto das propriedes, ficando com idade e empresa

### spread

vai repassar as informações de um objecto ou um array para outra estrutura de dados

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// -------

const usuario1 = {
  nome: "Gil",
  idade: 16,
};

const usuario2 = {
  ...usuario1,
  nome: "Gabriel",
};

console.log(usuario2);
```

---

## Template literals

Sintaxe limpa para fazer concatenação de variáveis com textos

```js
const nome = "Gil";

console.log("O meu nome é " + nome);

// Com template literals

console.log(`O meu nome é ${nome}`);
```

---

## Object Short Syntax

Forma curta de escrevar objectos

```js
const nome = "Victor";
const idade = 22;

const usuario = {
  nome: nome,
  idade: idade,
  empresa: "Brosmen",
};

// Com syntaxe curta

const usuario = {
  nome, // nome da variável acima
  idade, // nome da variável acima
  empresa: "Brosmen",
};
```

---

## Webpack

Serviço que vai nos desponibilizar uma forma de trabalharmos com mais de um arquivo (css, js, html, etc...).

```bash
yarn add webpack webpack-cli
```

webpack.config.js:

```js
module.exports = {
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
}
```

---

## import/export

### export

Fazer exportações de funcionalidades de dentro de um arquivo js

function.js:

```js
export function soma(a, b) {
  return a + b;
}
```

### import

Importar funcionalidades exportados de um certo arquivo.

main.js:

```js
import { soma } from "./function";

console.log(soma(1, 6)); // retorna 7
```

---

## Async / await

Forma menos verbosa para se criar **promises**

```bash
yarn add @babel/plugin-transform-async-to-generator -D
yarn add polyfill -D
```

.babelrc:

> plugins > "@babel/plugin-transform-async-to-generator"

webpack.config.js:

> entry > '@babel/polyfill',

```js
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

async function executaPromise() {
  const response = await minhaPromise();

  console.log(response);
}

executaPromise();
```

## Axios

```bash
yarn add axios
```

```js
import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`api.github.com/users/${username}`);

      console.log(response);
    } catch (err) {
      console.log("Erro na API");
    }
  }
}

Api.getUserInfo("victor3r");
```
