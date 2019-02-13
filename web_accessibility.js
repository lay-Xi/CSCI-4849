// do this when the document is loaded
$(document).ready(() => {
  $('#dialer-screen').show();
  $('#list-screen').hide();
  $('#new-screen').hide();
  $('#help-screen').hide();
});

$('#dialer-button').click(() => {
  $('#dialer-screen').show();
  $('#list-screen').hide();
  $('#new-screen').hide();
  $('#help-screen').hide();
});

$('#list-button').click(() => {
  $('#list-screen').show();
  $('#dialer-screen').hide();
  $('#new-screen').hide();
  $('#help-screen').hide();
});

$('#new-button').click(() => {
  $('#new-screen').show();
  $('#dialer-screen').hide();
  $('#list-screen').hide();
  $('#help-screen').hide();
});

$('#help-button').click(() => {
  $('#help-screen').show();
  $('#new-screen').hide();
  $('#dialer-screen').hide();
  $('#list-screen').hide();
});

// Button functionality
$('#dialer button').click(function () {
  $('#number_input').val($('#number_input').val() + this.innerText);
});

$('#clear-button').click(() => {
  $('#number_input').val('');
});
