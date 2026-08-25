function mostrarExec5() {
    const pi = 3.14;
    let raio = Number(prompt("Digite o raio do círculo:"));
    
    let area = pi * (raio ** 2);

    console.log(`A área do círculo é: ${area}`);
}

export default mostrarExec5;