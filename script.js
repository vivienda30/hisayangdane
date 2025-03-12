const openButton = document.getElementById('openButton');
const loveLetter = document.getElementById('loveLetter');

openButton.addEventListener('click', function() {
  loveLetter.style.display = 'block';
  loveLetter.style.animation = 'fadeIn 1s ease-in-out';
  openButton.style.display = 'none';
});
