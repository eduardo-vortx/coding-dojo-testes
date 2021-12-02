const { fizzBuzz } = require('../src/fizz-buzz')
const { expect } = require('chai')

describe('FizzBuzz', () => {
  it('Deve retornar Fizz, quando o numero for divisivel por 3', () => {
    // Arrange
    const numero = 6
    // Act
    const retorno = fizzBuzz(numero)
    // Assert
    expect(retorno).to.be.equal('Fizz')
  })

  it('Deve retornar Buzz, quando o número for divisível por 5', () => {
    //Arrange
    const numero = 10
    // Act
    const retorno = fizzBuzz(numero)
    //Assert
    expect(retorno).to.be.equal('Buzz')
  })
})
