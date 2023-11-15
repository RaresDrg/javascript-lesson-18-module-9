/*  
  Example 2 : 
*/

console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data...');

  const data = {
    id: 1,
    text: 'lorem ipsum dolor sit amet',
    status: 'important',
  };

  setTimeout(() => {
    console.log('Data received: ', data);
  }, 2000);
}, 2000);

console.log('Cod executat dupa');
