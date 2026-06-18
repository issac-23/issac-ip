// Call 1: Fetch a random dog image
const imageContainer = document.getElementById('dog-image-container');

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

// Call 2: Fetch a list of 5 dog breeds
const breedList = document.getElementById('breed-list');

fetch('https://api.thedogapi.com/v1/breeds?limit=5')
    .then(response => {
        if (!response.ok) throw new Error('Breed network response was not ok');
        return response.json();
    })
    .then(breeds => {
        for (let i = 0; i < breeds.length; i++) {
            const listItem = document.createElement('li');
            listItem.style.marginBottom = '0.5rem';
            listItem.innerHTML = `<strong>${breeds[i].name}</strong>: Bred for ${breeds[i].bred_for || 'companionship'}.`;
            breedList.appendChild(listItem);
        }
    })
    .catch(error => {
        console.error('Error fetching dog breeds:', error);
        breedList.innerHTML = '<p>Failed to load breed data.</p>';
    });