
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Samples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// const digits =493193;
// console.log(sum(16));
// console.log(sum(942));
// console.log(sum(132189));
// console.log(sum(493193));

// function sum(a){
//   let top=0 ;
//   let digit = a.toString();
//   for (let i = 0; i < digit.length; i++) {
//     top+= +digit[i]
//   }
    
//   if( top.toString().length > 1 ){
    
//    return sum(top);
//   }else {
//     return top
//   }
// }




//   2 sor 


// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// samples:
// isValidWalk(['n','s','n','s','n','s','n','s','n','s']) => true
// isValidWalk(['w']) => false
// isValidWalk(['n','n','n','s','n','s','n','s','n','s']) => false
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) => false


// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));

  

// function isValidWalk(yön){
//   if(yön.length !=10)return  false;
//   let dir = {'w':0, 'e':0,'s':0,'n':0};
  
//   for (let i = 0; i < yön.length; i++) {
//     dir[yön[i]]+=1;
//   }
//   if (dir['w']==dir['e'] && dir['s']==dir['n']) {
//         return true
//       }else{
//         return false
//       }
// } 




// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Samples:
// ['a','b','c','d','f'] -> 'e' 
// ['O','Q','R','S'] -> 'P'




// console.log(findMissingLetter(['O','Q','R','S']));
// console.log(findMissingLetter(['a','b','c','d','f']));
// function findMissingLetter(x)
// {
//   const lenX = x.length;
//   let letter =x.map((i)=>i.charCodeAt())
//   let ilk = letter[0];
//   for (let i = letter[0]; i < letter[letter.length-1]; i++) {
//     if (!letter.includes(i)) {
//       return String.fromCharCode(i);
//     }
//   } 
//   return ' ';
// }
    

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

// Examples:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


// function divisors(n) {
//   let res =[]
  
//   for (let i = 2; i < n; i++) {
//     if(n%i == 0){
//       res.push(i)
//     }
//   }
//   if(res.length == 0) return `${n} is prime`
//   return res

// }



  
// console.log(divisors(13));
// console.log(divisors(4));
// console.log(divisors(10));
// console.log(divisors(20));
// console.log(divisors(1250));


  
  





