let downX;
let downY;
let upX;
let upY;

$('#gestureArea').mousedown(event => {
  $('#gestureResult').text('Mouse down');
  downX = event.pageX;
});

$('#gestureArea').mouseup(event => {
  upX = event.pageX;

  if (downX < upX) {
    $('#gestureResult').text('Swipe right');
  } else if (downX > upX) {
    $('#gestureResult').text('Swipe left');
  } else {
    $('#gestureResult').text('Mouse up');
  }
});

$('#gestureArea').dblclick(() => {
  $('#gestureResult').text('Double click');
});
