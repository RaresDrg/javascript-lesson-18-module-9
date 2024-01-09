/*  
  Example 3 :
*/

const promise = new Promise((resolve, reject) => {
  resolve('OK');
  reject('Error: something went wrong');
});

promise
  .then(value => console.log(value))
  .catch(error => console.log(error));
// -->: OK //


const promise2 = new Promise((resolve, reject) => {
  reject('Error: something went wrong');
});

promise2
  .then(value => console.log(value))
  .catch(error => console.log(error));
// -->: Error: something went wrong //
