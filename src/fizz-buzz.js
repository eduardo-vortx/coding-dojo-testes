const fizzBuzz = (numero) => {
  let result = ''

  if (numero % 3 === 0) result += 'Fizz'

  if (numero % 5 === 0) result += 'Buzz'

  return result || numero
}

module.exports = { fizzBuzz }
