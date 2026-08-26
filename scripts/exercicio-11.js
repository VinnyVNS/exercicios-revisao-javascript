function mostrarExer11() {
    let carro = [
        {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2026
        }
    ];

    console.log(carro[0]);

    carro[0].cor = 'Preto';

    console.log(carro[0]);

    delete carro[0].ano;

    console.log(carro[0]);
}

export default mostrarExer11;