### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  1. use async function and await
  2. use Promise.then().catch()

- What is a Promise?
  Object that is returned by javascript 

- What are the differences between an async function and a regular function?
  async function will wait until the function is resolved and will not run the code below it.

  normal function will run the next code without waiting the function being resolved.

- What is the difference between Node.js and Express.js?
  node.js is the javascript code that runs on server side.
  
  express.js is the web app framework for node.js.

- What is the error-first callback pattern?
  node will accept the error first as the parameter.

- What is middleware?
  middleware is something that runs everytime routes are called.

- What does the `next` function do?
  next() will tell function to move on to next applicable function. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  1. no error handling provided
  2. repeating the same code, chould be simplified.
   
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
