
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Samples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digits =493193;
console.log(sum(16));
console.log(sum(942));
console.log(sum(132189));
console.log(sum(493193));

function sum(a){
  let top=0 ;
  let digit = a.toString();
  for (let i = 0; i < digit.length; i++) {
    top+= +digit[i]
  }
    
  if( top.toString().length > 1 ){
    
   return sum(top);
  }else {
    return top
  }
}



 

  
 


