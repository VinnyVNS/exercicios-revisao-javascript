function gerarTabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

function mostrarExer13() {
    const num = Number(prompt('Digite um número:'));

    gerarTabuada(num);
}

export default mostrarExer13;