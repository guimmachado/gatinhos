const newCatBtn = document.getElementById('new-cat-btn');
const catImage = document.getElementById('cat-image');

newCatBtn.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      catImage.src = imageUrl;
    })
    .catch(error => console.error('Error fetching cat:', error));
});