// Math for all currency exchange
let convertCurrency = function (fromCurrency, toCurrency, amount) {
  switch (fromCurrency) {
    case 'usd':
      switch (toCurrency) {
        case 'usd':
          return amount;
        case 'eur':
          return amount * 0.88;
        case 'jpy':
          return amount * 110.59;
        case 'gbp':
          return amount * .76;
        case 'aud':
          return amount * 1.39;
        case 'cad':
          return amount * 1.32;
        case 'chf':
          return amount * 1.00;
        case 'cny':
          return amount * 6.69;
        case 'sek':
          return amount * 9.29;
        case 'nzd':
          return amount * 1.45;
      }
      break;
    case 'eur':
      switch (toCurrency) {
        case 'usd':
          return amount * 1.14;
        case 'eur':
          return amount;
        case 'jpy':
          return amount * 125.88;
        case 'gbp':
          return amount * 0.86;
        case 'aud':
          return amount * 1.58;
        case 'cad':
          return amount * 1.50;
        case 'chf':
          return amount * 1.14;
        case 'cny':
          return amount * 7.62;
        case 'sek':
          return amount * 10.57;
        case 'nzd':
          return amount * 1.65;
      }
      break;
    case 'jpy':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.009;
        case 'eur':
          return amount * 0.008;
        case 'jpy':
          return amount;
        case 'gbp':
          return amount * 0.007;
        case 'aud':
          return amount * 0.01;
        case 'cad':
          return amount * 0.01;
        case 'chf':
          return amount * 0.009;
        case 'cny':
          return amount * 0.06;
        case 'sek':
          return amount * 0.08;
        case 'nzd':
          return amount * 0.01;
      }
      break;
    case 'gbp':
      switch (toCurrency) {
        case 'usd':
          return amount * 1.32;
        case 'eur':
          return amount * 1.16;
        case 'jpy':
          return amount * 146.47;
        case 'gbp':
          return amount;
        case 'aud':
          return amount * 1.84;
        case 'cad':
          return amount * 1.74;
        case 'chf':
          return amount * 1.33;
        case 'cny':
          return amount * 8.86;
        case 'sek':
          return amount * 12.3;
        case 'nzd':
          return amount * 1.92;
      }
      break;
    case 'aud':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.72;
        case 'eur':
          return amount * 0.63;
        case 'jpy':
          return amount * 79.45;
        case 'gbp':
          return amount * 0.54;
        case 'aud':
          return amount;
        case 'cad':
          return amount * 0.95;
        case 'chf':
          return amount * 0.72;
        case 'cny':
          return amount * 4.81;
        case 'sek':
          return amount * 6.67;
        case 'nzd':
          return amount * 1.04;
      }
      break;
    case 'cad':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.76;
        case 'eur':
          return amount * 0.67;
        case 'jpy':
          return amount * 83.96;
        case 'gbp':
          return amount * 0.57;
        case 'aud':
          return amount * 1.06;
        case 'cad':
          return amount;
        case 'chf':
          return amount * 0.76;
        case 'cny':
          return amount * 5.08;
        case 'sek':
          return amount * 7.05;
        case 'nzd':
          return amount * 1.10;
      }
      break;
    case 'chf':
      switch (toCurrency) {
        case 'usd':
          return amount;
        case 'eur':
          return amount * 0.88;
        case 'jpy':
          return amount * 110.53;
        case 'gbp':
          return amount * 0.75;
        case 'aud':
          return amount * 1.39;
        case 'cad':
          return amount * 1.32;
        case 'chf':
          return amount;
        case 'cny':
          return amount * 6.69;
        case 'sek':
          return amount * 9.28;
        case 'nzd':
          return amount * 1.45;
      }
      break;
    case 'cny':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.15;
        case 'eur':
          return amount * 0.13;
        case 'jpy':
          return amount * 16.53;
        case 'gbp':
          return amount * 0.11;
        case 'aud':
          return amount * 0.21;
        case 'cad':
          return amount * 0.20;
        case 'chf':
          return amount * 0.15;
        case 'cny':
          return amount;
        case 'sek':
          return amount * 1.39;
        case 'nzd':
          return amount * 0.22;
      }
      break;
    case 'sek':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.11;
        case 'eur':
          return amount * 0.09;
        case 'jpy':
          return amount * 11.9;
        case 'gbp':
          return amount * 0.08;
        case 'aud':
          return amount * 0.15;
        case 'cad':
          return amount * 0.14;
        case 'chf':
          return amount * 0.11;
        case 'cny':
          return amount * 0.72;
        case 'sek':
          return amount;
        case 'nzd':
          return amount * 0.16;
      }
      break;
    case 'nzd':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.69;
        case 'eur':
          return amount * 0.61;
        case 'jpy':
          return amount * 76.2;
        case 'gbp':
          return amount * 0.52;
        case 'aud':
          return amount * 0.96;
        case 'cad':
          return amount * 0.91;
        case 'chf':
          return amount * 0.69;
        case 'cny':
          return amount * 4.61;
        case 'sek':
          return amount * 6.4;
        case 'nzd':
          return amount;
      }
      break;
  }
};

// Submit button functionality
$('.convert_button').click(() => {
  let currencyFrom = document.getElementById('currency_from').value;
  let currencyTo = document.getElementById('currency_to').value;
  let amountFrom = document.getElementById('amount_from').value;

  let amountTo = convertCurrency(currencyFrom, currencyTo, amountFrom);

  $('.output').text(amountTo);
});

// Make new shake object
let shakeEvent = new Shake({ threshold: 10 });
shakeEvent.start();

// When shake, swap currencies
window.addEventListener('shake', () => {
  let currencyFrom = document.getElementById('currency_from').value;
  let currencyTo = document.getElementById('currency_to').value;

  $('#currency_from').val(currencyTo);
  $('#currency_to').val(currencyFrom);
}, false);

// Stop event
function stopShake() {
  shakeEvent.stop();
}
