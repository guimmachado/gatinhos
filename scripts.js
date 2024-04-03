const newCatBtn = document.getElementById('new-cat-btn');
const catImage = document.getElementById('cat-image');

newCatBtn.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
          if (data && data.length > 0 && data[0].url) {
              const imageUrl = data[0].url;
              catImage.src = imageUrl;
          } else {
              // If the API call doesn't return a valid image, display a placeholder image
              catImage.src = 'example.jpg';
          }
      })
      .catch(error => {
          console.error('Error fetching cat:', error);
          // If there's an error with the API call, display a placeholder image
          catImage.src = 'example.jpg';
      });
});