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


//Encontrar qualquer coisa com o caractere curinga
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Altere esta linha
let result7 = unRegex.test(exampleStr);


//Capturar um único caractere com múltiplas possibilidades
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Altere esta linha
let result8 = quoteSample.match(vowelRegex); // Altere esta linha


//Capturar letras do alfabeto
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Altere esta linha
let result9 = quoteSample.match(alphabetRegex); // Altere esta linha


//Capturar números e letras do alfabeto
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Altere esta linha
let result10 = quoteSample.match(myRegex); // Altere esta linha


//Capturar caracteres não especificados



//Capturar caracteres que aparecem uma ou mais vezes seguidas
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g; // Altere esta linha
let result12 = difficultSpelling.match(myRegex);


//Capturar caracteres que aparecem zero ou mais vezes seguidas
// Altere apenas o código abaixo desta linha
let chewieRegex = /Aa*/; // Altere esta linha
// Altere apenas o código acima desta linha

let result13 = chewieQuote.match(chewieRegex);


//Encontrar caracteres com captura preguiçosa



//Encontrar um ou mais criminosos em uma caçada
let reCriminals = /C+/; // Altere esta linha


//Encontrar padrões ao início da string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Altere esta linha
let result15 = calRegex.test(rickyAndCal);


//Encontrar padrões ao final da string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Altere esta linha
let result16 = lastRegex.test(caboose);


//Capturar todas as letras e números
let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Altere esta linha
let result17 = quoteSample.match(alphabetRegexV2).length;
// No teste. A regex deve usar a flag global. que é o g


//Capturar tudo exceto letras e números
let quoteSample4 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Altere esta linha
let result18 = quoteSample.match(nonAlphabetRegex).length;
//tem o g de global

//Capturar todos os números
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Altere esta linha
let result19 = movieName.match(numRegex).length;
//tem o g de global



//Capturar tudo exceto números
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Altere esta linha
let result20 = movieName.match(noNumRegex).length;
// g


//



//Capturar espaços em branco
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Altere esta linha
let result21 = sample.match(countWhiteSpace);
// g

//Capturar caracteres além do espaço
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Altere esta linha
let result22 = sample.match(countNonWhiteSpace);
//  g

//



//Verificar existência
let favWord = "favorite";
let favRegex = /favou?rite/; // Altere esta linha
let result24 = favRegex.test(favWord);



//



//


//


//


//