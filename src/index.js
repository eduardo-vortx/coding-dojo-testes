const { fizzBuzz } = require('./fizz-buzz')

console.time('fizzBuzz1')
for (let numero = 1; numero <= 1000; numero++) {
  const resultado = fizzBuzz1(numero)
  console.log(resultado)
}
console.timeEnd('fizzBuzz1')



console.time('fizzBuzz2')
for (let numero = 1; numero <= 1000; numero++) {
  const resultado = fizzBuzz2(numero)
  console.log(resultado)
}
console.timeEnd('fizzBuzz2')