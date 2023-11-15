/*  
  Example 1 : cod sincron / cod asincron (setTimeout()
*/

console.log('1');

setTimeout(() => console.log('2'), 0);

setTimeout(() => console.log('3'), 1000);

console.log('4');

setTimeout(() => console.log('5'), 200);

// -->: 1, 4, 2, 5, 3 //
// se executa codul sincron, dupa care se exceuta si cel asincron (setTimeout()) //
