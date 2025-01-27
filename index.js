const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingresa tu nombre: ', (nombre) => {
  console.log(`El nombre ingresado es: ${nombre}`);
  rl.close();
});
