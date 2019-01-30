// do this when the document is loaded
$(document).ready(() => {
  $('#dialer-screen').show();
  $('#list-screen').hide();
  $('#new-screen').hide();
});

$('#dialer-button').click(() => {
  $('#dialer-screen').show();
  $('#list-screen').hide();
  $('#new-screen').hide();
});

$('#list-button').click(() => {
  $('#list-screen').show();
  $('#dialer-screen').hide();
  $('#new-screen').hide();
});

$('#new-button').click(() => {
  $('#new-screen').show();
  $('#dialer-screen').hide();
  $('#list-screen').hide();
});
