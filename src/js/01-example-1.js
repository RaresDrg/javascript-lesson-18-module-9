/*  
  Example 1 : 
*/

console.log('A');

Promise.reject('B')
  .then(
    value => console.log('value')
    // error => console.log(error, 'error in then')  // *de obicei, se lucreaza cu erori in catch(). //
  )
  .catch(error => console.log(error, 'error in catch'))
  .finally(() => console.log('D'));

console.log('E');

// =>: A, E, B, D //
