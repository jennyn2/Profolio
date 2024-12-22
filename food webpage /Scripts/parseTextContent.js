const textFiles = {
  index: 'Content/index.txt',
  casual: 'Content/casual.txt',
  finedining: 'Content/finedining.txt',
  hiddengems: 'Content/hiddengems.txt'
};

// Get active page
const currentPage = window.location.pathname.split("/").pop().split(".")[0];
const textFile = textFiles[currentPage];

if (textFile) {
  fetch(textFile)
    .then(convertData)
    .then(processData)
    .then(generateGallery)
    .catch((error) => console.error('error loading content:', error));
} else {
  console.error('text content not found');
}

function convertData(rawData) {
  return rawData.text();
}

function cleanArray(array, value) {
  return array.filter(item => item !== value);
}

function processData(strData) {
  const lines = cleanArray(strData.split("\n"), '');
  const items = [];
  let currentItem = null;

  for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes(":") && (!currentItem || currentItem.image)) {
          // Save current item if complete
          if (currentItem) {
              items.push(currentItem);
          }
          // Start new gallery item
          const [title, ...descParts] = line.split(":");
          currentItem = {
              title: title.trim(),
              description: descParts.join(":").trim(),
              image: '',
              location: '',
              reviews: []
          };
      } else if (currentItem && !currentItem.image) {
          currentItem.image = line.trim();
      } else if (currentItem && !currentItem.location) {
          // Assign the location with lat long
          currentItem.location = line.trim();
      } else if (currentItem && currentItem.location) {
          const username = line.trim();
          const reviewText = lines[i + 1]?.trim();
          const starRating = parseInt(lines[i + 2]?.trim(), 10);

          // Skip review text and star rating lines when none present
          // to resolve error on blank
          if (username && reviewText && !isNaN(starRating)) {
              currentItem.reviews.push({ username, reviewText, starRating });
              i += 2;
          }
      }

      // Save the last item
      if (i === lines.length - 1 && currentItem) {
          items.push(currentItem);
      }
  }

  return items;
}

function generateGallery(items) {
  const gallery = document.querySelector('.main-gallery');
  gallery.innerHTML = '';

  items.forEach((item, index) => {
      // Create gallery-item element
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      // Create description
      const description = document.createElement('span');
      description.classList.add('gallery-item-description');

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('gallery-item-title');
      titleDiv.textContent = item.title;

      const textNode = document.createTextNode(item.description);
      description.appendChild(titleDiv);
      description.appendChild(textNode);

      // Create button container
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      // Star Button
      const starButton = document.createElement('button');
      starButton.classList.add('star-button');
      const starImg = document.createElement('img');
      starImg.src = 'Images/star.png';
      starImg.alt = 'View Reviews';
      starButton.appendChild(starImg);
      starButton.addEventListener('click', () => openReviewsModal(item.reviews));

      // Location Button
      const locationButton = document.createElement('button');
      locationButton.classList.add('location-button');
      const locationImg = document.createElement('img');
      locationImg.src = 'Images/pin.png';
      locationImg.alt = 'Open Location';
      locationButton.appendChild(locationImg);
      locationButton.addEventListener('click', () => openLocationModal(item.location));

      // Append buttons to container
      buttonContainer.appendChild(starButton);
      buttonContainer.appendChild(locationButton);

      // Append button container to description
      description.appendChild(buttonContainer);

      // Create image element
      const image = document.createElement('img');
      image.classList.add('gallery-item-image');
      image.src = item.image;
      image.alt = `Gallery image ${index + 1}`;

      // Append description and image to gallery-item
      galleryItem.appendChild(description);
      galleryItem.appendChild(image);

      // Append gallery-item to gallery
      gallery.appendChild(galleryItem);
  });
}