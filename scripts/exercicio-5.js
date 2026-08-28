function mostrarExer5() {
    const pi = 3.14;
    const raio = Number(prompt("Digite o raio do círculo:"));
    
    const area = pi * (raio ** 2);

    console.log(`A área do círculo é: ${area}`);
}

export default mostrarExer5;