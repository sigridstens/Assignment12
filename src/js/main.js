var dougieButton = document.getElementById('adoptdougie');

var tuttiButton = document.getElementById('adopttutti');

var giraffeButton = document.getElementById('adoptgiraffe');

var close = document.getElementById("cancel");

var submit = document.getElementById('submit');

dougieButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector ('aside')
    .style.display = "block";
});

tuttiButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector ('aside')
    .style.display = "block";
});

giraffeButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector ('aside')
    .style.display = "block";
});

close.addEventListener('click', function() {
  console.log('close it!');
  document
    .querySelector ('aside')
    .style.display = "none";

});

submit.addEventListener('click', function() {
  console.log('close it!');
  document
    .querySelector ('aside')
    .style.display = "none";

});





