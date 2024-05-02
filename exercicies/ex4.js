// 4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes.

const arrayNums = [45, 10, 21, 12, 15, 33, 8, 17];

function validaNumerosMaiores(numero) {
    if (numero > 20) {
        return true;
    }
    return false;
}

function filtarArray(func, array) {
    return array.filter(func);
}

const arrayValidado = filtarArray(validaNumerosMaiores, arrayNums);

console.log(arrayValidado); // [45, 21, 33] 

