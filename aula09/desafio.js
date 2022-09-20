const { differenceInMonths, differenceInDays } = require("date-fns");
const moment = require("moment");

//manipulando data utilizando o método moment.
let dataAntiga = moment("2005-09-18");
let dataAtual = moment("2022-09-07");

let diasDeDiferenca = dataAtual.diff(dataAntiga, 'days');
let mesesDeDiferenca = dataAtual.diff(dataAntiga, 'months');

//console.log('A diferença de dias entre 07-09-2022 e 18-09-2005 é: ' + diasDeDiferenca + ' dias');
//console.log('A diferença de meses entre 07-09-2022 e 18-09-2005 é: ' + mesesDeDiferenca + ' meses');

//manipulando data utilizando o método date-fns.
let dataAntigaFNS =  new Date(2005, 08, 18,);//considerando janeiro o mês 0 na posição do array.
let dataAtualFNS = new Date(2022, 08, 07);

let diasDeDiferencaFNS = differenceInDays(dataAtualFNS, dataAntigaFNS);
let mesesDeDiferencaFNS = differenceInMonths(dataAtualFNS, dataAntigaFNS);

console.log('A diferença de dias entre 07/09/2022 e 18/09/2005 é de: ' + diasDeDiferencaFNS + ' dias');
console.log('A diferença de meses entre 07/09/2022 e 18/09/2005 é de: ' + mesesDeDiferencaFNS + ' meses');

