/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n// class List {\n//   constructor() {\n//     this.data = [];\n//   }\n//   add(data) {\n//     this.data.push(data);\n//     console.log(this.data);\n//   }\n// }\n// class TodoList extends List {\n//   constructor() {\n//     super();\n//     this.usuario = 'Diego';\n//   }\n//   mostraUsuario() {\n//     console.log(this.usuario);\n//   }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = () => {\n//   MinhaLista.add('Novo todo');\n// }\n// MinhaLista.mostraUsuario();\n// class Matematica {\n//   static soma(a, b) {\n//     return a + b;\n//   }\n// }\n// console.log(Matematica.soma(1, 2));\n// \n// const arr = [1, 3, 4, 5, 8, 9];\n// const newArr = arr.map((item, index) => item + index);\n// console.log(newArr);\n// const sum = arr.reduce((total, next) => total + next);\n// console.log(sum);\n// const filter = arr.filter(item => item % 2 === 0);\n// console.log(filter);\n// const find = arr.find(item => item === 4);\n// console.log(find);\n// const teste = () => ({ nome: 'Diego' });\n// console.log(teste());\n// const soma = (a = 3, b = 6) => a + b;\n// console.log(soma(1));\n// console.log(soma());\n// const usuario = {\n//   nome: 'Diego',\n//   idade: 23,\n//   endereco: {\n//     cidade: 'Rio do Sul',\n//     estado: 'SC',\n//   },\n// };\n// const { nome, idade, endereco: { cidade } } = usuario;\n// console.log(nome);\n// console.log(idade);\n// console.log(cidade);\n// function mostraNome({ nome, idade, endereco: { cidade } }) {\n//   console.log(nome);\n//   console.log(idade);\n//   console.log(cidade);\n// }\n// mostraNome(usuario);\n//REST\n// const { nome, ...resto } = usuario;\n// const arr = [1, 2, 3, 4];\n// const [a, b, ...c] = arr;\n// console.log(nome);\n// console.log(resto);\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// function soma(...params) {\n//   return params.reduce((total, next) => total + next);\n// };\n// console.log(soma(1, 3, 4));\n//SPREAD\n// const arr1 = [1, 2, 3];\n// const arr2 = [4, 5, 6];\n// const arr3 = [...arr1, ...arr2];\n// console.log(arr3);\n// const usuario2 = { ...usuario, nome: 'Gabriel' };\n// console.log(usuario2);\n// const nome = 'Diego';\n// const idade = 23;\n// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);\n// const nome = 'Diego';\n// const idade = 23;\n// const usuario = {\n//   nome,\n//   idade,\n//   empresa: 'Rocketseat',\n// };\n// console.log(usuario);\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });