import { durationHours, weightedHours } from './calculator.js';
const form = document.querySelector('#calculator');
const format = number => new Intl.NumberFormat('de-CH', { maximumFractionDigits: 2 }).format(number);
form.addEventListener('submit', event => {
  event.preventDefault();
  const start = document.querySelector('#start').value;
  const end = document.querySelector('#end').value;
  const factor = Number(document.querySelector('#factor').value);
  try {
    document.querySelector('#duration').textContent = `Dauer: ${format(durationHours(start, end))} h`;
    document.querySelector('#weighted').textContent = `Gewichtete Stunden: ${format(weightedHours(start, end, factor))} h`;
  } catch (error) {
    document.querySelector('#duration').textContent = 'Bitte Eingaben prüfen.';
    document.querySelector('#weighted').textContent = error.message;
  }
});
form.requestSubmit();
