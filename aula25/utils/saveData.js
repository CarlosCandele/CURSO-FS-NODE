const fs = require('fs');
const path = require('path');


  const saveData = (array, fileName) => {
     /*Convertendo o array recipes em uma string */
     let dataString = JSON.stringify(array);

     /*Obetendo caminha até o arquivo data/recipe.js */
     let filePath = path.join('data', fileName);

     fs.writeFileSync(filePath, 'module.exports = ')  
     fs.appendFileSync(filePath, dataString);
}

module.exports = saveData;