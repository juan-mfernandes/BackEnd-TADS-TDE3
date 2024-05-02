// 3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.

const dobraValor = (n) => n * 2;
const arrayNums = [2, 4, 6, 8, 10];

// function mapearArray(fun, array) {
//     let novoArray = [];
//     for ( let i = 0; i < array.length; i++) { 
//         novoArray.push(fun(array[i]));
//     }

//     return novoArray;
// }

function mapearArray(func, array) {
    return array.map(func);
}

console.log(mapearArray(dobraValor, arrayNums));

//console.log(mapearArray(dobraValor, arrayNums));