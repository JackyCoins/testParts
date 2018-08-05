//region Cheating Lexical
function foo(str, a) {
  // If I don't use strict mode
  eval(str); //cheating!

  console.log(a, b); // 2 2
}

const b = 3;

foo("var b = 2;", 2);
//endregion