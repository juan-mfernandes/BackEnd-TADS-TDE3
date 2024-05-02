// 6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como parâmetros. A função de geração deve receber um índice e retornar o valor correspondente da lista. A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.

function genValues(i) {
    return i*2;
}

function gerarLista(n, genFunction) {
    let list = [];
    for (let i = 1; i <= n; i++) {
        list.push(genFunction(i));
    }

    return list;
}

console.log(gerarLista(5, genValues));