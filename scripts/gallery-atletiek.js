document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const imageTitle = document.getElementById('image-title');
  const imageDescription = document.getElementById('image-description');
  const imageLocation = document.getElementById('image-location-text');
  const imagePhotographer = document.getElementById('image-photographer-name');
  
  // Store image data
  const imageData = [
    {
      src: '/img-gallery/Gallery00011.jpg',
      title: '2000m Steeple',
      description: '15/08/2020, Barendrecht Twinson Energie Steeple Meeting .',
      location: 'Barendrecht',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00012.jpg',
      title: '1000m',
      description: '27/05/2017, Junioren C/D Poule 59 Wedstrijd 2.',
      location: 'Spijkenisse',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00013.jpg',
      title: '400m',
      description: '09/04/2024 Competitie U20/U18 Poule 34 R3',
      location: 'Zoetemeer',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00014.jpg',
      title: '1000m',
      description: '27/05/2017,Junioren C/D Poule 59 Wedstrijd 2',
      location: 'Spijkenisse',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00015.jpg',
      title: '800m',
      description: '05/06/2024 C.A.V. Xtra Energie Track Meeting ',
      location: 'Barendrecht',
      photographer: 'Koen Imholz'
    }
  ];

  // Function to update main image and details
  function updateMainImage(index) {
    // Add fade-out class to create transition effect
    mainImage.style.opacity = '0';
    
    // After a short delay, update the image and details
    setTimeout(() => {
      const data = imageData[index];
      mainImage.src = data.src;
      mainImage.alt = data.title;
      imageTitle.textContent = data.title;
      imageDescription.textContent = data.description;
      imageLocation.textContent = data.location;
      imagePhotographer.textContent = data.photographer;
      
      // Remove the active class from all thumbnails
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      
      // Add active class to the selected thumbnail
      thumbnails[index].classList.add('active');
      
      // Fade the image back in
      mainImage.style.opacity = '1';
    }, 200);
  }
  
  // Add click event listeners to thumbnails
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      updateMainImage(index);
    });
    
    // Also add hover event for desktop devices
    thumbnail.addEventListener('mouseenter', () => {
      // Only update on hover if we're on a device that supports hover
      if (window.matchMedia('(hover: hover)').matches) {
        updateMainImage(index);
      }
    });
  });
  
  // Handle keyboard navigation
  document.addEventListener('keydown', (event) => {
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
  
  // Initialize with first image
  updateMainImage(0);
  
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