function mostrarExer10() {
    let string = prompt('Digite uma string:');

    if(string.length <= 5) {
        console.log(`A string ${string} é pequena.`);
    }
    else if(string.length > 5 && string.length <= 10) {
        console.log(`A string ${string} é média.`);
    }
    else {
        console.log(`A string ${string} é grande.`);
    }
}

export default mostrarExer10;