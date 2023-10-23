
const photoGallery = document.querySelector('.photos');

const loadingMessage = document.querySelector('.loading-errorMessage');

const networkError = document.querySelector('.network-error');

const pictureDisplay = document.querySelector('.picture_showcase');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Oops!!! Network Error');
        }
        return response.json();
    })
    .then(dataRecord => {
        loadingMessage.style.display = 'none';

        const photos=dataRecord.slice(0, 12);

        pictureDisplay.textContent= `${photos.length} products displayed`;

        photos.forEach(photo => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = photo.url;
            image.alt = photo.title;
            

            const title = document.createElement('p');
            title.textContent =photo.title;
            

            card.appendChild(image);
            card.appendChild(title);

            photoGallery.appendChild(card);
        });
    })
    .catch(error => {
        loadingMessage.style.display = 'none';
        networkError.style.display = 'block';
        console.error('Error:', error);
    });
