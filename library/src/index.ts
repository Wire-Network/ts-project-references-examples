import { v4 }  from "uuid";
import * as _ from "lodash";


export function generateId():string {
    return v4()
}


export function capitalize(str: string): string {
   return _.capitalize(str)
}