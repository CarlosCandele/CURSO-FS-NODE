const moment = require("moment");

console.log(moment().format('DD/MM/YYYY'));
return;

const listarPets = (pets) => {
  pets.forEach(pet => {
      console.log("Nome: " + pet.nome + '\n' + 'Tipo: ' + pet.tipo);
  });
  console.log('Temos o total de ' + pets.length + ' pet(s) no sistema');
}

function campanhaVacina(listaVacina) {
  let petsVacinados = 0;
  let petsNvacinados = 0;

  listaVacina.filter((pet) => {
      if(pet.vacinado) {
          petsVacinados++;
      }else{
          petsNvacinados++;
      }
  });
  console.log('Temos o Total de ' + petsVacinados + ' vacinados');
  console.log('Temos o Total de ' + petsNvacinados + ' não vacinados');
}


function validaDados(objetoPet) {
  return( 
          typeof objetoPet.nome === 'string' &&
          typeof objetoPet.tipo === 'string' &&
          typeof objetoPet.raca === 'string' &&
          typeof objetoPet.idade === 'number' &&
          typeof objetoPet.genero === 'string' &&
          typeof objetoPet.vacinado === 'boolean'
          )
  }

function cadastrarPet(petList,objetoPet) {
if(typeof objetoPet == 'object') {
  if(validaDados(objetoPet)){
    petList.push(objetoPet)
    console.log(petList)
  }else{
    console.log('O objeto informado não possui todas as propriedades')
  }
}else{
  console.log('Informe um objeto valido para cadastro!')
}
}


function servicosPrestados(pet, servicoRealizado) {
  servicoRealizado(pet)
}

function darBanhoNoPet(pet) {
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push('banho na data ' + data);
  console.log('O pet ' + pet.nome + ' tomou banho');
}


function tosarPet(pet){
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push('tosa na data ' + data);
  console.log('O pet ' + pet.nome + ' foi tosado');
}


function cadastrarPetsSpradOperator(petList, json) {
  let listaJson = JSON.parse(json);
  petList.push(...listaJson);

  return petList;
}

// cadastrar pets usando for
function addPets(petList, json) {
  let arrayJson = JSON.parse(json);

  for( let i = 0; i < arrayJson.length; i++) {
      petList.push(arrayJson[i]);
  }

  return petList;
}


const removerPet = (id, petList) => {

  let pet = petList.filter((pet) => {
      return pet.id == id
  });

  if(pet.length > 0) {
      petList.splice(id - 1, 1);
      console.log(petList);
  }else{
      console.log('Pet não encontrado com id: ' + id);
  }


 }
 

module.exports = {
  listarPets, 
  campanhaVacina,
  cadastrarPet,
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsSpradOperator,
  addPets,
  removerPet
}

