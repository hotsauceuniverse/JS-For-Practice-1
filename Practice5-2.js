let output = ''

for (i = 1; i < 9; i++) {
  for (j = 1; j < i+1; j++){
    output += '*'  
  }
  output += '\n'
}

console.log(output)

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********