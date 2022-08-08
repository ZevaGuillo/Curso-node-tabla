const { crearArchivoA } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=');


// const base = 5

crearArchivoA( argv.b , argv.l, argv.h)
    .then((nombre) => console.log(nombre, 'creado'))
    .catch( err => console.log(err));

