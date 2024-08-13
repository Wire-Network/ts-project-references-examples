import {capitalize, generateId} from "my-library";
import { mod } from "jsutils"


console.log('==============Hello from project1!===========')

console.log(`calling generateId() - ${generateId()}`)

console.log(`calling capitalize - ${capitalize('test string')}`)


console.log(`Using jsutils only install in current project - output: ${mod(-6, 5)}`) // 4