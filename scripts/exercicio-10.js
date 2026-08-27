function verificarTamanho(texto) {
    if(texto.length <= 5) {
        return `A string ${texto} é pequena.`;
    }
    else if(texto.length > 5 && texto.length <= 10) {
        return `A string ${texto} é média.`;
    }
    else {
        return `A string ${texto} é grande.`;
    }
}

function mostrarExer10() {
    let string = prompt('Digite uma string:');

    let resultado = verificarTamanho(string);
    console.log(resultado);
}

export default mostrarExer10;