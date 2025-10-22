import { test, expect, describe, it } from '@jest/globals';

describe("Meus primeiros testes", () => {
    test('dois mais dois é quatro', () => {
        expect(2 + 2).toBe(4);
    });
    it("Deve retornar a igualdade de um objeto com toEqual", () => {
        const obj1 = { atributo1: 1, atributo: 2 };
        expect(obj1).toEqual({ atributo1: 1, atributo: 2 });
        expect(obj1).toHaveProperty("atributo1")
        expect(obj1).not.toHaveProperty("nome")
        expect(obj1).toHaveProperty("atributo", 2)
        expect(obj1.atributo).toBe(2)
    });

    it("Deve retornar se a string existe na palavra teste con o toMacth", () => {
        expect("teste").toMatch(/e/);
    });

    it("Deve testar numero", () => {
        const numero = 10
        expect(numero).toBeLessThan(11); //Menor
        expect(numero).toBeLessThanOrEqual(10); //Menor ou igual
        expect(numero).toBeCloseTo(10.0001); //Arredonda após a virgula
        expect(numero).toBeCloseTo(9.9996);
        expect(numero).not.toBeNull();
        expect(numero).toHaveProperty("toString")
        expect(numero).toBeGreaterThan(9);
        expect(numero).toBeGreaterThanOrEqual(10);
        expect(numero).toBeTruthy();
        expect(numero).not.toBeFalsy();

    });
});

