/*  
  Example 4 :
*/

const statusMessage = document.getElementById('statusMessage');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 'ok',
      message: 'Totul a fost ok',
    });
    // reject({
    //     status: 'error',
    //     message: 'A aparut o eroare'
    // })
  }, 2000);
});

promise
  .then(value => {
    console.log(value);
    statusMessage.innerHTML = `<h1>${value.status}</h1><p>${value.message}</p>`;
  })
  .catch(error => {
    console.log(error);
    statusMessage.innerHTML = `<h1>${error.status}</h1><p>${error.message}</p>`;
  });
