const soma = (a, b) => {
    if (a == null || b == null) {
        throw new Error("É necessário 2 valores")
    } else if (typeof (a) != 'number' || typeof (b) != 'number') {
        throw new Error("É necessário que os valores sejam numeros")
    }
    return a + b
};


const subtracao = (a, b) => {
    if (a == null || b == null) {
        throw new Error("É necessário 2 valores")
    } else if (typeof (a) != 'number' || typeof (b) != 'number') {
        throw new Error("É necessário que os valores sejam numeros")
    }
    return a - b

};

const multiplicacao = (a, b) => {
    if (a == null || b == null) {
        throw new Error("É necessário 2 valores")
    } else if (typeof (a) != 'number' || typeof (b) != 'number') {
        throw new Error("É necessário que os valores sejam numeros")
    } 
    return a * b
};



const divisao = (dividendo, divisor) => {
    if (a == null || b == null) {
        throw new Error("É necessário 2 valores")
    } else if (divisor == 0) {
        throw new Error("Divisor inválido")
    } else if (typeof (dividendo) != 'number' || typeof (divisor) != 'number') {
        throw new Error("É necessário que os valores sejam numeros")
    }
    return dividendo / divisor
}

export {
    soma,
    subtracao,
    multiplicacao,
    divisao
}