function somar(a, b) {
    return a + b;
}

function mostrarExer9() {
    let num1 = Number(prompt('Digite um numero:'));
    let num2 = Number(prompt('Digite um numero:'));
    
    let resultado = somar(num1, num2);
    console.log(resultado);
}

export default mostrarExer9;