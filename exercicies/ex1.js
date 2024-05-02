// 1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array.

const arrayNums = [5, 20, 30, 72, 22, 15];

function encontrarMaiorElemento(array) {
    let maior = 0;
    for ( let i = 0; i < array.length; i++) {
        let numAtual = array[i];
        if (numAtual > maior) {
            maior = numAtual;
        }
    }

    return maior;
}

console.log(encontrarMaiorElemento(arrayNums));

