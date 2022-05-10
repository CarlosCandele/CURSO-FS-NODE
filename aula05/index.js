
const json = require("./json");

let pets = [
    {
      id: 1,
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: []
    },
    {
      id: 2,
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: []
    }
  ];

  // temos 1000 pets e nossa empresa pretende criar uma campanha de vacinacao,
// porém, precisamos atingir apenas pets que ainda não foram vacinados, para isso
// teremos que efetuar uma contagem de quantos pets já estão vacinados e quantos pets
// ainda precisam ser vacinados.

// Por exemplo: Pense que temos 700 animais vacinados e 300 nao vacinados, logo,
// o foco da nossa campanha seria atingir apenas os 300 animais que ainda nao foram vacinados
// maaaas, fiquem tranquilos. Por enquanto, iremos apenas focar na contagem de vacinados e 
// nao vacinados.


//Resolução 1
const petsVacina=(lista)=>{
  let vacinados = 0;
  let naoVacinados = 0;

  lista.filter((pet) => {
    if(pet.vacinado){
      vacinados++;
    }else{
      naoVacinados++
    }
  })
  console.log("Temos " + vacinados + " pet vacinado(s)")
  console.log("Temos " + naoVacinados + " pet não vacinado(s)");
}

//petsVacina(pets);

//Resolução 2

const petsNaoVacinados = (array) =>{
  let quantVacinados = pets.filter((objeto)=> objeto.vacinado);
  let quantNaoVacinados = pets.filter((objeto)=> objeto.vacinado === false);

  console.log('Temos ' + quantVacinados.length + ' Vacinado(s)');
  console.log('Temos ' + quantNaoVacinados.length + ' não vacinado(s)');
}
//petsNaoVacinados(pets);

//Resolução 3
function campanhaVacinacao(pets){
  let vacinado = 0;
  let semVacina = 0;
  pets.forEach(element =>{
    if(element.vacinado){
      vacinado++;
    }else{
      semVacina++;
    }
  })
  let listaPetsVacina = [vacinado, semVacina];
}
let campanha = campanhaVacinacao(pets);
//console.log('Pets vacinado(s): ' + campanha[0] + "\n Pets não vacinado(s): " + campanha[1]);

//Resolução 4

function filtrarPetVacina(pets){
  let petsVacinados = pets.filter((pet)=>{
    return pet.vacinado;
  });
  let petsNaoVacinados = pets.filter((pet)=>{
    return pet.vacinado == false;
  });
  console.log('Temos ' + petsVacinados.length + ' vacinado(s)' + '\n temos ' + petsNaoVacinados.length + ' não vacinado(s)');
}
//filtrarPetVacina(pets);

//Resolução 5 
function checaVacina(pets){
  let estaoVacinados = 0;
  let naoVacinados = 0;

  for(let prop in pets){
    if(pets[prop].vacinado){
      estaoVacinados++;
    }else{
      naoVacinados++;
    }
  }
  return `Estão vacinados: ${estaoVacinados}, e não vacinados: ${naoVacinados}`
}
//console.log(checaVacina(pets));

//Resolução 6 
function contar(pets){
  let vc = 0;
  let nvc = 0;

  for (let i = 0; i < pets.length; i++) {
    pets[i].vacinado ? vc++ : nvc++;//if ternario.
    
  }

  return 'temos ' + vc + ' vacinado(s), e temos ' + nvc + ' não vacinado(s)';
}
//console.log(contar(pets));

//Resolução 7
function contagemDePets(pets){
  let vac = 0;
  let nVac = 0;

  pets.filter((pet)=>{
    if(pet.vacinado){
      vac++;
    }else{
      nVac++;
    }
  })
  console.log('Temos o total de ' + vac + ' vacinado(s)');
  console.log('Temos o total de ' + nVac + ' não vacinado(s)');
} 
//contagemDePets(pets);


// passando a função listaPets de for para foreach..

// const listarPets =()=>{
//   for (let i = 0; i < pets.length; i++) {
//     console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
    
//   }
//   console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
// }

const listarPets = (pets)=>{
  pets.forEach((pet) => {
    console.log("Nome: " + pet.nome + "\n" + "Tipo: " + pet.tipo);
  });
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

//listarPets(pets);

//Criar uma função removerPet que ao receber dois parâmetros(sendo o primeiro o ID do pet
//o segundo a lista na qual queremos remover um pet).Deveremos reconhecer o pet e excluí-lo, caso 
//o ID passado não seja encontrado na lista de pets, iremos retornar uma mensagem do tipo: 
//"Não encotramos nenhum pet com id " + idPet

const removerPet = (id, lista) =>{
  let pet = lista.filter((pet) =>{
    return pet.id == id;
    console.log(pet);
  });
  if(pet.length > 0){
    pets.splice(id - 1, 1)// splice remove ou adiciona um elemento
    console.log(pets);
  }else{
    console.log("Não encotramos nenhum pet com id " + id)
  }
} 
removerPet(1, pets);