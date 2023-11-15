/* Example 5: Write a New Year's countdown timer that can be stopped by clicking the **Stop** button

New Year - January 1 00:00 2024

We will use setInterval() to run the counter:

  1. subtract the current date from the New Year - this way we will get the time difference
(we will work with milliseconds)
  2. from the milliseconds obtained in step 1, we will extract the number of days, hours, minutes
and seconds remaining until the New Year
  3. show this data to the user on the page
*/

const stopBtn = document.getElementById('stopBtn');
const continueBtn = document.getElementById('continueBtn');
const timerEl = document.getElementById('time');

let intervalId = setInterval(calculateTimeLeftToNY, 1000);

function calculateTimeLeftToNY() {
  const nextYear = new Date().getFullYear() + 1;
  const newYearDate = new Date(`January 1, ${nextYear}`);
  const now = new Date();
  const diff = newYearDate - now;
  printTimeFormat(diff);
}

function printTimeFormat(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  timerEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;
}


stopBtn.addEventListener('click', stopInterval);

function stopInterval() {
  console.log('s-a oprit');
  clearInterval(intervalId);

  stopBtn.disabled = true;
  continueBtn.disabled = false;
}


continueBtn.addEventListener('click', coninueInterval);

function coninueInterval() {
  console.log('s-a repornit');
  intervalId = setInterval(calculateTimeLeftToNY, 1000);

  stopBtn.disabled = false;
  continueBtn.disabled = true;
}
