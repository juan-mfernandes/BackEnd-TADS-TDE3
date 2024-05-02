// 2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro e retorna a soma de todos os elementos pares do array.

const arrayNums = [5, 20, 30, 72, 22, 15];

function somaElementosPares(array) {
    let soma = 0; 
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            soma += array[i];
        }
    }

    return soma;
}

console.log("A soma dos elementos pares do array eh: " + somaElementosPares(arrayNums));