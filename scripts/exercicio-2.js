function mostrarExer2() {
    const num1 = Number(prompt(`Digite o número 1:`));
    const num2 = Number(prompt(`Digite o número 2:`));

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;

    console.log(`${num1} + ${num2} = ${soma}\n${num1} - ${num2} = ${subtracao}\n${num1} * ${num2} = ${multiplicacao}\n${num1} / ${num2} = ${divisao}`);
}

export default mostrarExer2;