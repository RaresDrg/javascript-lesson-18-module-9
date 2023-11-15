/*  
  Example 3 : cod asincron "sincron"
*/

// delay egal => functiile (asincroane) se executa "sincron", in ordiea declararii lor (de sus in jos) //
// --> 2, 1, 3 //

setTimeout(() => console.log('2'), 2000);
setTimeout(() => console.log('1'), 2000);
setTimeout(() => console.log('3'), 2000);
