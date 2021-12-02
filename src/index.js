const { fizzBuzz } = require('./fizz-buzz')

for (let numero = 1; numero <= 100; numero++) {
  const resultado = fizzBuzz(numero)
  console.log(resultado)
}
