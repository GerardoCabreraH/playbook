console.log("Objetos en JavaScript")

// Ejemplo 1: Crear un objeto
const object1 = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(object1)

// Ejemplo 2: Crear un objeto con propiedades
const object2 = {
  name: "Gerardo",
  age: 27
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(object2)

// Ejemplo 3: Objeto con diferentes propiedades
const object3 = {
  name: "Duquesa",
  age: 3,
  nicknames: [
    "Bonita",
  ],
  address: {
    zip_code: "64200",
    street: "Lucha de clases 1519 CROC",
    city: "MTY"
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(object3)
console.log(object3.name)
console.log(object3["address"])

// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Duquesa",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
  }
}
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  nombre: "Dill",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.nombre} dice hola a ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Duquesa")
