document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const mainImage = document.getElementById('main-image');
  const thumbnailsContainer = document.querySelector('.thumbnails-container');
  const imageTitle = document.getElementById('image-title');
  const imageDescription = document.getElementById('image-description');
  const imageLocation = document.getElementById('image-location-text');
  const imagePhotographer = document.getElementById('image-photographer-name');
  
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
      description: 'Europa’s kleinste vogel. Van snavel tot staartpunt meet hij slechts 9 cm',
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

  // Function to create thumbnail element
  function createThumbnail(imageInfo, index, isActive = false) {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail${isActive ? ' active' : ''}`;
    thumbnail.setAttribute('data-index', index);

    const img = document.createElement('img');
    img.src = imageInfo.src;
    img.alt = imageInfo.title;

    thumbnail.appendChild(img);
    return thumbnail;
  }

  // Function to initialize gallery
  function initializeGallery() {
    // Clear existing thumbnails
    thumbnailsContainer.innerHTML = '';
    
    // Create and add thumbnails
    imageData.forEach((data, index) => {
      const thumbnail = createThumbnail(data, index, index === 0);
      thumbnailsContainer.appendChild(thumbnail);
    });

    // Add event listeners to new thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        updateMainImage(index);
      });
      
      thumbnail.addEventListener('mouseenter', () => {
        if (window.matchMedia('(hover: hover)').matches) {
          updateMainImage(index);
        }
      });
    });

    // Initialize with first image
    updateMainImage(0);
  }

  // Function to add new images to the gallery
  function addImagesToGallery(newImages) {
    imageData.push(...newImages);
    initializeGallery();
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
  initializeGallery();

  // Example of how to add new images:
//  addImagesToGallery([
 //   {
 //     src: '/img-gallery/Vogel1.JPG',
 //     title: 'Goudhaan',
 //     description: 'Europa’s kleinste vogel. Van snavel tot staartpunt meet hij slechts 9 cm',
 //     location: 'Boswachterij Dorst',
 //     photographer: 'Koen Imholz'
 //   }
 //  
 // ]);
  
  // Add smooth scroll animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});