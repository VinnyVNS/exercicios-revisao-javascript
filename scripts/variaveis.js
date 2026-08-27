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

  const numerosMaior10 = numeros.filter(numero => numero > 20);
  console.log(numerosMaior10);

  console.log('Exercicio 15:');

  const numerosImpares = numeros.filter(numero => numero % 2 > 0);
  console.log(numerosImpares);

  console.log('Exercicio 16:');

  const maiorDeIdade = usuarios.filter(usuario => usuario.idade >= 18);
  console.log(maiorDeIdade);

  console.log('Exercicio 17:');

  const menorDeIdade = usuarios.filter(usuario => usuario.idade < 18);
  console.log(menorDeIdade);

  console.log('Exercicio 18:');

  const nomeSobrenome = usuarios.map(usuario => {
    return `${usuario.nome} ${usuario.sobrenome}`;
  });
  console.log(nomeSobrenome);

  console.log('Exercicio 19:');

  const numeroMultiplos = numeros.map(numero => {
    if(numero % 3 === 0 && numero % 5 === 0) {
      return 'FizzBuzz';
    }
    else if(numero % 3 === 0) {
      return 'Fizz';
    }
    else if(numero % 5 === 0) {
      return 'Buzz';
    }
    else{
      return numero;
    }
  });

  console.log(numeroMultiplos);
};

export default mostrarExerVariaveis;