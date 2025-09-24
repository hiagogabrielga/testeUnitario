const { test, expect, describe, it } = require('@jest/globals');
const {soma, subtracao, multiplicacao, divisao} = require("./calculadora")
describe("Teste da calculadora com valores inteiros positivos", () => {
    test('Deve retorna a soma de dois valores', () => {
        const esperado = 30
        const retornado = soma(25, 5) 
        expect(retornado).toBe(esperado);
    });
    test('Deve retorna a subtração de dois valores', () => {
        const esperado = 30
        const retornado = subtracao(35, 5) 
        expect(retornado).toBe(esperado);
    });
    test('Deve retorna a multiplicação de dois valores', () => {
        const esperado = 30
        const retornado = multiplicacao(6, 5) 
        expect(retornado).toBe(esperado);
    });
    test('Deve retorna a divisão de dois valores', () => {
        const esperado = 3
        const retornado = divisao(9, 3) 
        expect(retornado).toBe(esperado);
    });

    test('Deve retorna a divisão de dois valores com o divisor sendo 0', () => {
        expect(()=> divisao(10, 0)).toThrow("Divisor inválido");
    });
    test('Deve retorna um erro ao enviar valores difernetes de numericos', () => {
        expect(()=> soma('a', 'b')).toThrow("É necessário que os valores sejam numeros");
    });
    test('Deve retornar um erro ao enviar só 1 valor', () => {
        expect(()=> soma(10)).toThrow("É necessário 2 valores");
    });
})

describe("Teste da calculadora com valores inteiros negativos", () => {
    test('Deve retorna a soma de dois valores', () => {
        const esperado = -20
        const retornado = soma(-25, 5) 
        expect(retornado).toBe(esperado);
    });
    test('Deve retorna a subtração de dois valores', () => {
        const esperado = 30
        const retornado = subtracao(25, -5) 
        expect(retornado).toBe(esperado);
    });
    test('Deve retorna a multiplicação de dois valores', () => {
        const esperado = 30
        const retornado = multiplicacao(-6, -5) 
        expect(retornado).toBe(esperado);
    });
    test('Deve retorna a divisão de dois valores', () => {
        const esperado = 3
        const retornado = divisao(-9, -3) 
        expect(retornado).toBe(esperado);
    });
})