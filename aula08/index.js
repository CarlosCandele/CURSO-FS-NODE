const json = require("./json.js");
const {listarPets,
       campanhaVacina,
       cadastrarPet,
       servicosPrestados,
       darBanhoNoPet,
       tosarPet,
       cadastrarPetsSpradOperator,
       addPets,
       removerPet} = require("./funcoes-pet.js")
       let petList = [
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
          id:2,
          nome: 'Pituco',
          tipo: 'pássaro',
          raca: 'calopsita',
          idade: 3,
          genero: 'Fêmea',
          vacinado: false,
          servicos: []
        },
        {
            id:3,
            nome: 'Mood',
            tipo: 'Aguia',
            raca: 'Garra-Branca',
            idade: 3,
            genero: 'Fêmea',
            vacinado: false,
            servicos: []
          }
      ];
  let petNovo = {
    nome: 'Alemão',
    tipo: 'Cachorro',
    raca: 'Dogo Argentino',
    idade: 4,
    genero: 'Macho',
    vacinado: true
  }
  

  //cadastrarPet(petList,petNovo);
  //listarPets(pets);
  //campanhaVacina(petList);
  //servicosPrestados(petList[1], darBanhoNoPet);
  //servicosPrestados(petList[1], tosarPet);
  //console.log(cadastrarPetsSpradOperator(petList, json));
  //console.log(addPets(petList, json));
  removerPet(3, petList);
    return;

// Por exemplo: Pense que temos 700 animais vacinados e 300 nao vacinados, logo,
// o foco da nossa campanha seria atingir apenas os 300 animais que ainda nao foram vacinados
// maaaas, fiquem tranquilos. Por enquanto, iremos apenas focar na contagem de vacinados e 
// nao vacinados.





//usando forEach para contagem de pets vacinados e não vacinados.

function vacina(lista) {
    let petVacinado = 0;
    let petNvacinado = 0;

    petList.forEach(pet => {
        if(pet.vacinado){
            petVacinado++;
        }else{
            petNvacinado++;
        }
    });
    let listaPetsVacina = [petVacinado, petNvacinado];
    return listaPetsVacina;
}
//let campanha = vacina(pets);
//console.log('Pets Vacinados :' + campanha[0] + '\n' + 'Pets não Vacinados: ' + campanha[1]);



function filtrarPetPorNome(lista, nomePet) {
    let petsFiltrados = lista.filter((pet) => {
        return pet.nome == nomePet
    });

    if(petsFiltrados.length > 0) {
        return petsFiltrados;
    }else{
        return 'Não existe o pet com nome ' + nomePet
    }
    
}

//console.log(filtrarPetPorNome(pets, 'Pituco'));


//Percorrer  o array de pets usando forEach






   


