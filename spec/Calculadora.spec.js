describe('Teste Calculadora',  () => {
    let calc;
    beforeEach(() => calc = new Calculadora());
    it('Teste deve somar dois valores', () => {
        expect(calc.adicao(10, 5)).toBe(15)
    });
    it('Teste deve subtrair dois valores', () => {
    expect(calc.substracao(10, 5)).toBe(5)
    });
    it('Teste deve multiplicar dois valores', () => {
        expect(calc.multiplicacao(10, 5)).toBe(50)
    });
    it('Teste deve dividir dois valores', () => {
        expect(calc.divisao(10,5)).toBe(2)
    });
    it('Teste não deve dividir por 0', () => {
        expect(() => calc.divisao(10, 0)).toThrowError('Divisao por zero impossível');
    });
})