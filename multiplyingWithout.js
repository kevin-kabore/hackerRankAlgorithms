
function multiply(x,y) {
  // recursive case
  if(x> 1) {
    return y + multiply(x-1,y)
  } else {
    return y
  }
}
