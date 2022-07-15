// // Criar um objeto JavaScript básico
let dog = {
  name: "samurá",
  numLegs: 4,
};

// // Usar notação de ponto para acessar as propriedades de um objeto
let dog1 = {
  name: "Spot",
  numLegs: 4,
};
// Altere apenas o código abaixo desta linha
console.log(dog1.name);
console.log(dog1.numLegs);

// // Criar um método em um objeto
let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has 4 legs.";
  },
};

dog2.sayLegs();

// // Fazer código mais reutilizável com a palavra-chave this
let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog3.sayLegs();

// // Definir uma função construtora
function Dog() {
  this.name = "Samurá";
  this.color = "marrom";
  this.numLegs = 4;
}

// // Usar um construtor para criar objetos
function Dog1() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Altere apenas o código abaixo desta linha
let hound = new Dog1();

// // Estender construtores para receber argumentos
function Dog2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog2();

// // Verificar o construtor de um objeto com instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Altere apenas o código abaixo desta linha
let myHouse = {
  numBedrooms: 4,
};

myHouse instanceof House;

// // Entender propriedades próprias
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Altere apenas o código abaixo desta linha
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

// // Usar propriedades de protótipos para reduzir código duplicado
function Dog3(name) {
  this.name = name; //own property
}
Dog3.prototype.numLegs = 4; // prototype property

// Altere apenas o código acima desta linha
let beagle = new Dog3("Snoopy");

// // Iterar sobre todas as propriedades
function Dog4(name) {
  this.name = name;
}

Dog4.prototype.numLegs = 4;

let beagle1 = new Dog4("Snoopy");

let ownProps1 = [];
let prototypeProps = [];

// // Altere apenas o código abaixo desta linha
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

// // Entender a propriedade construtora
function Dog5(name) {
  this.name = name;
}

// // Altere apenas o código abaixo desta linha
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog5) {
    return true;
  } else {
    return false;
  }
}

// // Mudar o protótipo para um novo objeto
function Dog6(name) {
  this.name = name;
}

Dog6.prototype = {
  // Altere apenas o código abaixo desta linha
  numLegs: 4,
  eat: function () {},
  describe: function () {},
  
  };// //Lembrar de definir a propriedade construtora quando alterar o protótipothis.name = name;


  function Dog7(name) {
    this.name = name;
  }
  
  // Altere apenas o código abaixo desta linha
  Dog7.prototype = {
    constructor: Dog7,  //<-
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  // // Entender de onde vem o protótipo de um objeto
  function Dog8(name) {
    this.name = name;
  }
  
  let beagle2 = new Dog8("Snoopy");
  
  // Altere apenas o código abaixo desta linha
  Dog8.prototype.isPrototypeOf(beagle2);