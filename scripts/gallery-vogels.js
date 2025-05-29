document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const imageTitle = document.getElementById('image-title');
  const imageDescription = document.getElementById('image-description');
  const imageLocation = document.getElementById('image-location-text');
  const imagePhotographer = document.getElementById('image-photographer-name');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.querySelector('.modal-close');
  
  // Store image data
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
      description: 'Europa\'s kleinste vogel. Van snavel tot staartpunt meet hij slechts 9 cm',
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

  // Function to open modal
  function openModal(imageData) {
    modal.style.display = 'block';
    modalImg.src = imageData.src;
    modalCaption.textContent = `${imageData.title} - ${imageData.location}`;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  // Function to close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Event listeners for modal
  modalClose.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });

  // Function to create thumbnails
  function createThumbnails() {
    const container = document.querySelector('.thumbnails-container');
    container.innerHTML = ''; // Clear existing thumbnails
    
    imageData.forEach((data, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail${index === 0 ? ' active' : ''}`;
      thumbnail.setAttribute('data-index', index);
      
      const img = document.createElement('img');
      img.src = data.src;
      img.alt = data.title;
      
      thumbnail.appendChild(img);
      container.appendChild(thumbnail);
      
      // Add click event for modal
      img.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent thumbnail selection
        openModal(data);
      });
      
      thumbnail.addEventListener('click', () => updateMainImage(index));
      thumbnail.addEventListener('mouseenter', () => {
        if (window.matchMedia('(hover: hover)').matches) {
          updateMainImage(index);
        }
      });
    });
  }

  // Function to update main image and details
  function updateMainImage(index) {
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
      const data = imageData[index];
      mainImage.src = data.src;
      mainImage.alt = data.title;
      imageTitle.textContent = data.title;
      imageDescription.textContent = data.description;
      imageLocation.textContent = data.location;
      imagePhotographer.textContent = data.photographer;
      
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      thumbnails[index].classList.add('active');
      
      mainImage.style.opacity = '1';
    }, 200);
  }
  
  // Handle keyboard navigation
  document.addEventListener('keydown', (event) => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const activeIndex = Array.from(thumbnails).findIndex(thumb => 
      thumb.classList.contains('active')
    );
    
    let newIndex = activeIndex;
    
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      newIndex = (activeIndex + 1) % thumbnails.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      newIndex = (activeIndex - 1 + thumbnails.length) % thumbnails.length;
    }
    
    if (newIndex !== activeIndex) {
      updateMainImage(newIndex);
    }
  });
  
  // Initialize gallery
  createThumbnails();
  updateMainImage(0);
});