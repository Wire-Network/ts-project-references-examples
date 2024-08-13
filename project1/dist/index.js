"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_library_1 = require("my-library");
const jsutils_1 = require("jsutils");
console.log('==============Hello from project1!===========');
console.log(`calling generateId() - ${(0, my_library_1.generateId)()}`);
console.log(`calling capitalize - ${(0, my_library_1.capitalize)('test string')}`);
console.log(`Using jsutils only install in current project - output: ${(0, jsutils_1.mod)(-6, 5)}`); // 4
