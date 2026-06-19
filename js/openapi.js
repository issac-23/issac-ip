const imageContainer = document.getElementById('dog-image-container');
const breedList = document.getElementById('breed-list');

// Button Event Listeners
document.getElementById('btn-image').addEventListener('click', fetchDogImage);
document.getElementById('btn-breeds').addEventListener('click', fetchDogBreeds);

function fetchDogImage() {
    // Clear previous data
    imageContainer.innerHTML = '<h2>Random Dog Image</h2>';
    breedList.innerHTML = ''; 

    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) throw new Error('Image network response was not ok');
            return response.json();
        })
        .then(data => {
            const img = document.createElement('img');
            img.src = data[0].url;
            img.alt = "A random dog";
            img.style.maxWidth = '100%';
            img.style.borderRadius = '8px';
            img.style.marginTop = '1rem';
            imageContainer.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
            imageContainer.innerHTML += '<p>Failed to load image.</p>';
        });
}

function fetchDogBreeds() {
    // Clear previous data
    breedList.innerHTML = '';
    imageContainer.innerHTML = ''; 

    // Swapped to dog.ceo API which is 100% free and will not throw a 403 error
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            if (!response.ok) throw new Error('Breed network response was not ok');
            return response.json();
        })
        .then(data => {
            // This API returns an object, so we grab the first 5 breed names from the keys
            const breeds = Object.keys(data.message).slice(0, 5);
            
            for (let i = 0; i < breeds.length; i++) {
                const listItem = document.createElement('li');
                listItem.style.marginBottom = '0.5rem';
                // Capitalize the first letter of the breed
                const formattedBreed = breeds[i].charAt(0).toUpperCase() + breeds[i].slice(1);
                listItem.innerHTML = `<strong>${formattedBreed}</strong>: A loyal and excellent dog breed.`;
                breedList.appendChild(listItem);
            }
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
            breedList.innerHTML = '<p>Failed to load breed data.</p>';
        });
}