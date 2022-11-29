// Desafio 1 - Perrcorer o array de animais da variável animais e listá-los no terminal.
let animais = ['Leão', 'Elefante','Leopardo'];
for (let i = 0; i < animais.length; i++){
    //console.log(animais[i]);
}

//Utilizando for of

for(let item of animais){
    //console.log(item);
}


// Desafio 3 - Criar uma função que percorra a lista de pets
//e listar a seguinte mensagem para cada pet:'Nome: nome do pet'
//e uma mensagem para cada tipo de pet 'Tipo: tipo do pet'.
//Por fim retornar uma mensagem contendo a quantidade total de pets
//cadastrado no nosso sistema.
let pets = [
    {
        nome: 'Sandy',
        tipo: 'cachorro',
        raca: 'Pudou',
        idade: 5,
        genero: 'Femenino',
        vacinado: true
    },
    {
        nome: 'Nicolas',
        tipo: 'cachorro',
        raca: 'Dalmata',
        idade: 8,
        genero: 'Masculino',
        vacinado: false
    }
]

function listarPets(){
    for(let i = 0; i < pets.length; i++){
        console.log('Nome: ' + pets[i].nome + '\n' + 'Tipo: ' + pets[i].tipo)
    }
    console.log('Temos o total de: ' + pets.length + 'pet(s) registrado(s) no sistema')
}
//listarPets()

// Desafio 4 - Criar uma função de titulo validaDados que ira validar se o parâmetro
//possui todas as propriedades que são:nome,tipo,raça,idade,genero e vacinado,
//lembrando que a propriedade vacinado recebe valores booleanos.

function validaDados(objetoPet){
    return (
    typeof objetoPet.nome === 'string' && 
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean' 
    )   
}


//Desafio 5 - Criar uma função que adicione pets na nossa lista de pets.

function addPets(objetoPet){
   if(typeof objetoPet == 'object'){
    if(validaDados(objetoPet)){
        pets.push(objetoPet)
        console.log(pets)
    
   }else{
       console.log('Informe um objeto valido para cadastar um novo pet')
   }
}
}
let novoPet = {
    nome: 'Epito',
    tipo: 'cachorro',
    raca: 'auau',
    idade: 7,
    genero: 'Masculino',
    vacinado: true,
    
}

addPets(novoPet);


//Calback
function calcular(numero1, numero2, operacao){
    operacao(numero1, numero2)
    //console.log('Operação realizada com sucesso!')
}

function soma(numero1, numero2){
    console.log('O valor da soma é: ' + (numero1 + numero2));
}

function subtrai(numero1, numero2){
    console.log(numero1 + numero2);
}

function divide(numero1, numero2){
    console.log(numero1 / numero2);
}

function multiplica(numero1, numero2){
    console.log(numero1 * numero2)
    
}

//calcular(25,67,soma);
//calcular(32, 36, subtrai);
//calcular(55, 40, divide);
//calcular(60, 35, multiplica);


//spred operator 

let x = [
    {
        nome: 'Historia',
        tipo: 'cachorro',
        raca: 'Pudou',
        idade: 5,
        genero: 'Femenino',
        vacinado: true
    },
]

let y = [
    {
        nome: 'Hirme',
        tipo: 'cachorro',
        raca: 'Pudou',
        idade: 5,
        genero: 'Femenino',
        vacinado: true
    },
]


x.push(...y);//função spred operator
//console.log(x)




//percorrer um objeto literal pessoa e listar suas propriedades no terminal.
let pessoa = {
    nome:'Jorge',
    idade:33
}

for(let prop in pessoa){
   // console.log('Propriedade: ' + prop + ' valor da propriedade ' + pessoa[prop])
}

//Desafio 6 - criar uma função que adicione todos esses pets da lista que está contida na nossa lista de pets e a variável pets
//lembrando que: não precisa ter validação de dados, no json não temos as propriedades vacinado, servicos
//dica:utilizar JSON.parse na sua string json para transformá-la em um array de objetos

function cadastrarPetsSpreadOperator(pets,json){
    let arrayPetJson = JSON.parse(json);
    pets.push(...arrayPetsJson)

    return pets
}

// function cadastrarPetsFor(pets, josn){
//     let arrayPetsJson1 = JSON.parse(json)

//     for(let i = 0; i < arrayPetsJson1.length; i++){
//         pets.psuh(arrayPetsJson1[i])

//     }
//     return pets
// }

console.log('Alterei meu Repositório')