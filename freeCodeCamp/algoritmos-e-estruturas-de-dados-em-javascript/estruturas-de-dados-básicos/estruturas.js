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



  //