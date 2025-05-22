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
      src: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg',
      title: 'Mountain Serenity',
      description: 'A peaceful mountain lake reflecting the surrounding peaks at sunrise.',
      location: 'Swiss Alps',
      photographer: 'Alex Rivers'
    },
    {
      src: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
      title: 'Desert Sunset',
      description: 'The vast expanse of a desert landscape bathed in the golden light of sunset.',
      location: 'Sahara Desert',
      photographer: 'Maya Johnson'
    },
    {
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      title: 'Coastal Dreams',
      description: 'Waves gently lapping against a rocky coastline under a vibrant sky.',
      location: 'Big Sur, California',
      photographer: 'Thomas Wright'
    },
    {
      src: 'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg',
      title: 'Forest Mist',
      description: 'A mystical forest shrouded in morning mist, with sunlight filtering through the trees.',
      location: 'Black Forest, Germany',
      photographer: 'Emma Chen'
    },
    {
      src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg',
      title: 'Arctic Wonder',
      description: 'The ethereal beauty of northern lights dancing across the Arctic sky.',
      location: 'Iceland',
      photographer: 'Lars Peterson'
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