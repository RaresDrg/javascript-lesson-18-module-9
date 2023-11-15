/*  
  Example 4: 
*/

for (let i = 3; i > 0; i--) {
  const delay = i * 1000;
  setTimeout(() => console.log(i), delay);
}

// i = 3 => const delay = 3 * 1000; setTimeout(() => console.log(3), 3000); //
// i = 2 => const delay = 2 * 1000; setTimeout(() => console.log(2), 2000); //
// i = 1 => const delay = 1 * 1000; setTimeout(() => console.log(1), 1000); //

// --> 1, 2 , 3 //
