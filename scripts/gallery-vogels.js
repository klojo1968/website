document.addEventListener('DOMContentLoaded', () => {
  const imageGrid = document.querySelector('.image-grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');
  const imageTitle = document.getElementById('image-title');
  const imageDescription = document.getElementById('image-description');
  const imageLocation = document.getElementById('image-location-text');
  const imagePhotographer = document.getElementById('image-photographer-name');

  // Image data
  const imageData = [
    {
      src: '/img-gallery/Gallery00001.jpg',
      title: 'Rietzanger',
      description: 'Een rietzanger zingt zijn lied vanaf een rietstengel',
      location: 'Wevershoek',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00002.jpg',
      title: 'Blauwborst',
      description: 'Blauwborst met zijn karakteristieke blauwe borstveren',
      location: 'Waalbos',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00003.jpg',
      title: 'Torenvalk',
      description: 'Torenvalk op uitkijk',
      location: 'Waalbos',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00004.jpg',
      title: 'Honningbij',
      description: 'Honningbij verzamelt nectar',
      location: 'Kijfhoek',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00005.jpg',
      title: 'Grote Bonte Specht',
      description: 'Grote Bonte Specht op zoek naar voedsel',
      location: 'Brunssummerheide',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Vogel1.JPG',
      title: 'Goudhaan',
      description: 'Europa's kleinste vogel. Van snavel tot staartpunt meet hij slechts 9 cm',
      location: 'Boswachterij Dorst',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/vogel2.JPG',
      title: 'Staartmees',
      description: 'Staartmeezen geliefde bolletjes-met-staart-vogels',
      location: 'Wervershoek',
      photographer: 'Koen Imholz'
    }
  ];

  // Create grid items
  imageData.forEach(data => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.title;
    
    gridItem.appendChild(img);
    imageGrid.appendChild(gridItem);

    // Add click event to open modal
    gridItem.addEventListener('click', () => {
      modalImg.src = data.src;
      imageTitle.textContent = data.title;
      imageDescription.textContent = data.description;
      imageLocation.textContent = data.location;
      imagePhotographer.textContent = data.photographer;
      modal.style.display = 'block';
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal with escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});