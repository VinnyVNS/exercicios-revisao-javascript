function mostrarExerVariaveis() {

  const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

  const usuarios = [
    {
      nome: 'Melba',
      sobrenome: 'Stein',
      idade: 15,
      temAnimalEstimacao: false,
    },
    {
      nome: 'Donovan',
      sobrenome: 'Barrera',
      idade: 18,
      temAnimalEstimacao: false,
    },
    {
      nome: 'Gross',
      sobrenome: 'Maldonado',
      idade: 25,
      temAnimalEstimacao: true,
    },
    {
      nome: 'Massey',
      sobrenome: 'Waller',
      idade: 16,
      temAnimalEstimacao: true,
    },
    {
      nome: 'Harris',
      sobrenome: 'Bowers',
      idade: 22,
      temAnimalEstimacao: true,
    },
    {
      nome: 'Roberson',
      sobrenome: 'Hancock',
      idade: 30,
      temAnimalEstimacao: false,
    },
  ];

  console.log('Exercicio 14:');

  for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 20) {
      console.log(numeros[i]);
    }
  }

  console.log('Exercicio 15:');

  for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 > 0) {
      console.log(numeros[i]);
    }
  }

  console.log('Exercicio 16:');

  for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].idade >= 18) {
      console.log(`${usuarios[i].nome} é maior de idade.`);
    }
  }

  console.log('Exercicio 17:');

  for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].idade < 18) {
      console.log(`${usuarios[i].nome} é menor de idade.`);
    }
  }
}






export default mostrarExerVariaveis;
