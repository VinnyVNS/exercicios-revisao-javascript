function mostrarExer2() {
    let num1 = Number(prompt(`Digite o número 1:`));
    let num2 = Number(prompt(`Digite o número 2:`));

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;

    console.log(`${num1} + ${num2} = ${soma}\n${num1} - ${num2} = ${subtracao}\n${num1} * ${num2} = ${multiplicacao}\n${num1} / ${num2} = ${divisao}`);
}

export default mostrarExer2;