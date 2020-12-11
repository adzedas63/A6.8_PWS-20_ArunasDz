var counter = 0;

function moveBy1(x) {
  var width = 1;
  var bar = document.getElementById('bar');
  counter++;
  if (counter * x < 101) {
    bar.style.width = counter * x + '%';
  }
}