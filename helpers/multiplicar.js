const fs = require("fs");
require('colors');

// const crearArchivoP = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     try {
//       let salida = "";

//       for (let i = 1; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i}\n`;
//       }

//       console.log(salida);

//       fs.writeFileSync(`tabla del ${base}.txt`, salida);
//       resolve(`Tabla-${base}.txt`);
//     } catch (error) {
//       reject("Se presentó un error");
//     }
//   });
// };

const crearArchivoA = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = ''
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.cyan} ${i} ${'='.red} ${base * i}\n`.green;
    }


    if(listar) console.log(consola);

    fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
    return `Tabla-${base}.txt`;
  } catch (error) {
    throw 'Se presentó un error',error;
  }
};

module.exports = {
  crearArchivoA
};
