const fizzBuzz1 = (numero) => {
  let result = ''

  if (numero % 3 === 0) result += 'Fizz'

  if (numero % 5 === 0) result += 'Buzz'

  return result || numero
}

const fizzBuzz2 = (numero) => {
  if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz'

  if (numero % 3 == 0) return 'Fizz'

  if (numero % 5 == 0) return 'Buzz'

  return numero
}

module.exports = { fizzBuzz1, fizzBuzz2 }
