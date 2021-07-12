function add(x, y) {
    return x + y;
  } 
  console.log(add(1,2)); 
  //==> 3
  
  function subtract(x,y) {
    return x - y ;
  }
  console.log(subtract(1,2)); 
  //==> -1
  
  
  function multiply(x,y) {
    return x * y ;
  }
  console.log(multiply(1,2)); 
  //==> 2
  
  function divide(x,y) {
    return x / y ;
  }
  console.log(divide(1,2)); 
  //==> 0.5


  function increment(n) {
    return(++n)
  }
increment(n)
 
function decrement(n) {
    return(--n)
  }
decrement(n)


function makeInt(string) {
  return parseInt(string,  10)
}


function preserveDecimal(string) {
  return parseFloat(string)
}