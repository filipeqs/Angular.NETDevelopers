var global_variable = 12; //access anywhere in file
function a() {
  if (true) {
    global_variable = 13;
  }
}

function b() {
  if (true) {
    var local_variable = 7; //access anywhere inside the function
  }
  local_variable = 100; // accesible anywhere inside the scope of the function
}
//local_variable = 100; // uncomment to check compiler error

function c() {
  if (true) {
    let block_variable = 42; // access only in the if block
  }
  //block_variable = 11; // uncomment to check compiler error (out of if block scope)
}
