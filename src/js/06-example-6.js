/* 
  Example 5: Promise.all vs Promise.race
*/


const sleep = ms => new Promise((resolve) => {
  setTimeout(() => {
    resolve(ms)
  }, ms)
})

const promises = [sleep(2000), sleep(5000), sleep(500)]

Promise.all(promises).then( value => {
    console.log(value);
    console.log('All promises')
}) 

Promise.race(promises).then( value => {
    console.log(value);
    console.log('Race promises')
}) 