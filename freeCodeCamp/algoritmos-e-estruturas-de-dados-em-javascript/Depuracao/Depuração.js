//Usar o console do JavaScript para verificar o valor de uma variável
let a = 5;
let b = 1;
a++;
// Altere apenas o código abaixo desta linha
let sumAB = a + b;
console.log(a);



//Entender a diferença entre o console do freeCodeCamp e do navegador
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();



//Usar typeof para verificar o tipo da variável
let seven = 7;
let three = "3";
console.log(seven + three);
// Altere apeseven + thnas o código abaixo desta linha
console.log(typeof seven);
console.log(typeof three);



//Capturar nomes de variáveis e funções com erros ortográficos
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);



//Identificar parênteses, colchetes, chaves e aspas sem fechamento
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array value is: ${arraySum}`);



//Identificar uso misto de aspas simples e duplas
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);



//Identificar uso do operador de atribuição ao invés do operador de igualdade
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);



//Capturar abertura e fechamento de parênteses faltantes após uma chamada de função
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result1 = getNine();
  console.log(result1);



  //Capturar argumentos passados na ordem errada ao chamar uma função
  