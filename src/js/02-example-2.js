/*  
  Example 2 : ordinea de executie a codului asincron
*/

// setTimeout(calback, delay) //
// executare in functie de valoarea delay: --> 1, 2, 3 //

setTimeout(() => console.log(3), 3000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(1), 1000);
