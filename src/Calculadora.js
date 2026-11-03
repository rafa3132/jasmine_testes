class Calculadora{
    adicao(a, b){
        return a + b;
    }
    substracao(a,b){
        return a - b;
    }
    multiplicacao(a, b){
        return a * b;
    }
    divisao(a, b){
        if (b == 0){
            throw new Error('Divisao por zero impossível');
        }
        return a / b;
    }
} 