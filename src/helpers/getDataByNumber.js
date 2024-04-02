import { caps } from "../data/caps";

export const getDataByNumber = (numero) => {
    const validNumber = [0, 1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    if( !validNumber.includes(parseInt(numero)) ){
        throw new Error(` ${numero} no es valido `)
    }

    return caps.filter( cap => cap.numero == numero)

}