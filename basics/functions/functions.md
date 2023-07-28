# Arrow Functions VS Traditional Functions

Can be seen as a compact alternative to traditional function expressions.

Arrow Functions:

* don't have their own bindings `this`, `arguments` or `super` and should **not** be used as methods
* cannot be used as `constructors`. Calling them with `new` throws a `TypeScript` error
* cannot use `yield` within their body and cannot be created as generator functions
* rest and default parameters as well as destructuring within params is supported and **always** require parentheses
  * parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.
* can be `async` by prefixing with the `async` keyword

## Decompose Traditional to Arrow

```javascript
// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;
```
