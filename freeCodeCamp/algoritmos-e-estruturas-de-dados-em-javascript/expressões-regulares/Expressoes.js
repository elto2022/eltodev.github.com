//Usar o método test
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 


//Criar correspondência de strings literais
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Altere esta linha
let result1 = waldoRegex.test(waldoIsHiding);


//Buscar uma string literal com diferentes possibilidades
let petString = "James has a pet cat.";
let petRegex = /change|dog|cat|bird|fish/; // Altere esta linha
let result2 = petRegex.test(petString);


//Ignorar maiúsculas e minúsculas ao buscar
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Altere esta linha
let result3 = fccRegex.test(myString1);


//Extrair Resultados
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Altere esta linha
let result4 = extractStr.match(codingRegex); // Altere esta linha


//Encontrar mais do que o primeiro resultado
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Altere esta linha
let result5 = twinkleStar.match(starRegex); // Altere esta linha


//Capturar um único caractere com múltiplas possibilidades
