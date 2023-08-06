// You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

// >>> message = "The supplier's phone number is (555) 867-5309"
// >>> area_code(message)
// '555'
// The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.

//*My solution
function areaCode(text) {
  let areaCode = ""
  
  for(let i = 0; i < text.length; i++) {
    if(text[i] === "(") {
        areaCode += text[i+1]
        areaCode += text[i+2]
        areaCode += text[i+3]
    }
  }
  
  return areaCode;
}


//*Better solutions
function areaCode1(text) {
  return text.slice(text.indexOf('(') + 1, text.indexOf(')'));
}

function areaCode2(text) {
  return text.match(/\((\d{3})\)/)[1];
}