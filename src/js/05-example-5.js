/*  
  Example 5: Promises chaining
*/

console.log('Request data...');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');

    const data = {
      id: 1,
      text: 'lorem ipsum dolor sit amet',
      status: 'important',
    };

    if (!data.id) {
      reject(new Error('No id!'));
    }
    resolve(data);
  }, 2000);
});

console.log('Cod de executat dupa');

console.log(promise);

promise
  .then(data => {
    console.log('Data changed');
    data.status = 'ordinary';
    return data;
  })
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Promise end'))
;