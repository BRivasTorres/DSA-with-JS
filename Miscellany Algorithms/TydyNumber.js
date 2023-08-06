// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n){
  let numArr = n.toString().split("")
  
  for(let i = 1; i < numArr.length; i++) {
      if(numArr[i] < numArr[i-1]) {
        return false
      }
  }  
  return true
}