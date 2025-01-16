// any is special type in TS, that we can use whenever we don’t want a particular value to cause typechecking errors.
// When a value is of type any, you can access any properties of it (which will in turn be of type any),
// call it like a `function`, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

export let value: any = 1;
value.toUpperCase();
