//Usar um array para armazenar uma coleção de dados
let yourArray = [1, 2, 3, true, "Hi"]; // Altere esta linha



//Acessar o conteúdo de uma lista utilizando a notação de colchetes
let myArray = ["a", "b", "c", "d"];
// Altere apenas o código abaixo desta linha
myArray[1] = "Holla"
// Altere apenas o código acima desta linha
console.log(myArray);



//Adicionar itens em um array com push() e unshift()
function mixedNumbers(arr) {
    // Altere apenas o código abaixo desta linha
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));



  //Remover itens de um array com pop() e shift()
  function popShift(arr) {
    let popped = arr.pop(); // Altere esta linha
    let shifted = arr.shift(); // Altere esta linha
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));



  //Remover itens usando splice()
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Altere apenas o código abaixo desta linha
arr.splice(1, 4);
// Altere apenas o código acima desta linha
console.log(arr);



//Adicionar e remover itens usando splice()
function htmlColorNames(arr) {
  // Altere apenas o código abaixo desta linha
arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Altere apenas o código acima desta linha
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



//Copiar itens de um array usando slice()
function forecast(arr) {
  // Altere apenas o código abaixo desta linha

  return arr.slice(2, 4);
}

// Altere apenas o código acima desta linha
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



//Copiar um array com o operador spread




//Combinar arrays com o operador spread
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment, 'is', 'fun']; // Altere esta linha
  return sentence;
}

console.log(spreadOut());



//Verificar a presença de um elemento com indexOf()




//Iterar através de todos os itens de um array usando laços for



//Criar arrays multidimensionais complexos



//Adicionar pares de chave-valor a objetos JavaScript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Altere apenas o código abaixo desta linha
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
// Altere apenas o código acima desta linha

console.log(foods);



//Modificar um objeto aninhado dentro de um objeto
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Altere apenas o código abaixo desta linha
  userActivity.data.online = 45;
// Altere apenas o código acima desta linha

console.log(userActivity);



//Acessar nomes de propriedades com notação de colchetes



//Usar a palavra-chave delete para remover propriedades de objetos
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Altere apenas o código abaixo desta linha
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
// Altere apenas o código acima desta linha

console.log(foods);



//