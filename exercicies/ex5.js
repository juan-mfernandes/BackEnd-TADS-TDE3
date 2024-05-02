// 5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc).

const stringTest = "Teste";
const passwordTeste = "teTs!";

function validaSenha(passw) {
    let specialCaracters = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
    const isSpecialCaracters = specialCaracters.split('').some((ch) => passw.includes(ch));
    if(isSpecialCaracters === true) {
        console.log("A senha é valida! Ela possui caracteres especiais.");
    }else{
        console.log("A senha é invalida! Ela não possui caracteres especiais.");
    }
}

function validacaoDeNome(name) {
    if (name.length >= 3) {
        return true;
    }
    return false;
}

function validarDadosNome(funcValidation, object){
    if (funcValidation(object) === true) {
        console.log("Nome válido. Possui 3 ou mais caracteres.");
    } else {
        console.log("Nome inválido. Tem menos de 3 caracteres.");
    }
}


validaSenha(passwordTeste);
validarDadosNome(validacaoDeNome, stringTest);

