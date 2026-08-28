function somar(a, b) {
    return a + b;
}

function mostrarExer9() {
    const num1 = Number(prompt('Digite um numero:'));
    const num2 = Number(prompt('Digite um numero:'));
    
    const resultado = somar(num1, num2);
    console.log(resultado);
}

export default mostrarExer9;