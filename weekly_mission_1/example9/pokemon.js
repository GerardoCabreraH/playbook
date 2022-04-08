class Pokemon {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase Pokemon
    this.name = name // Estás variables se le conocen como atributos y hace referencia a un Pokemon
  }

  // método Un Pokemon te saluda!!!
  // this.name es la variable que se guarda en el contexto local
  sayHello () {
    console.log(`Mi pokemon ${this.name} te saluda!!!`)
  }

  // método Un pokemon te dice una palabra
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método
  sayMessage (message) {
    console.log(`Mi pokemon ${this.name} dice: ${message}`)
  }
}

// Esta clase se exporta en este módulo
module.exports = Pokemon
