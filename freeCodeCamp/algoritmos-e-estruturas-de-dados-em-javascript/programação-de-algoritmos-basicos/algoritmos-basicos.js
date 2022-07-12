//Converter Celsius para Fahrenheit




//Inverter uma sttring
function reverseString(str) {
    let newString = "";
        for (let i = str.length - 1; i >= 0; i--) { 
          newString += str[i];
        }
    return newString;
  }
  
  reverseString("hello");



  //Encontrar o fatorial de um número
  function factorialize(num) {
    if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

factorialize(5);



//Encontrar a palavra mais longa em uma string




//Encontrar a palavra mais longa em uma string
