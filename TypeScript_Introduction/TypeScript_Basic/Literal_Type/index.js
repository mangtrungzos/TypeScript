"use strict";
let changingString = "Hello World";
changingString = "Ngan";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
