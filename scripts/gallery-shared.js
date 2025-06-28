export class GalleryManager {
  constructor(imageData, options = {}) {
    this.imageData = imageData;
    this.currentIndex = 0;
    this.options = {
      enableModal: options.enableModal || false,
      fadeTransition: options.fadeTransition !== false,
      keyboardNavigation: options.keyboardNavigation !== false,
      hoverPreview: options.hoverPreview !== false
    };
    
    this.init();
  }

  init() {
    this.getElements();
    this.createThumbnails();
    this.bindEvents();
    this.updateMainImage(0);
  }

  getElements() {
    this.mainImage = document.getElementById('main-image');
    this.imageTitle = document.getElementById('image-title');
    this.imageDescription = document.getElementById('image-description');
    this.imageLocation = document.getElementById('image-location-text');
    this.imagePhotographer = document.getElementById('image-photographer-name');
    this.thumbnailsContainer = document.querySelector('.thumbnails-container');
    
    if (this.options.enableModal) {
      this.modal = document.getElementById('imageModal');
      this.modalImg = document.getElementById('modalImage');
      this.modalCaption = document.getElementById('modalCaption');
      this.modalClose = document.querySelector('.modal-close');
    }
  }

  createThumbnails() {
    if (!this.thumbnailsContainer) return;
    
    this.thumbnailsContainer.innerHTML = '';
    
    this.imageData.forEach((data, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail${index === 0 ? ' active' : ''}`;
      thumbnail.setAttribute('data-index', index);
      
      const img = document.createElement('img');
      img.src = data.src;
      img.alt = data.title;
      
      thumbnail.appendChild(img);
      this.thumbnailsContainer.appendChild(thumbnail);
      
      if (this.options.enableModal) {
        img.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openModal(data);
        });
      }
      
      thumbnail.addEventListener('click', () => this.updateMainImage(index));
      
      if (this.options.hoverPreview) {
        thumbnail.addEventListener('mouseenter', () => {
          if (window.matchMedia('(hover: hover)').matches) {
            this.updateMainImage(index);
          }
        });
      }
    });
  }

  updateMainImage(index) {
    if (index < 0 || index >= this.imageData.length) return;
    
    this.currentIndex = index;
    
    if (this.options.fadeTransition) {
      this.mainImage.style.opacity = '0';
    }
    
    setTimeout(() => {
      const data = this.imageData[index];
      this.mainImage.src = data.src;
      this.mainImage.alt = data.title;
      
      if (this.imageTitle) this.imageTitle.textContent = data.title;
      if (this.imageDescription) this.imageDescription.textContent = data.description;
      if (this.imageLocation) this.imageLocation.textContent = data.location;
      if (this.imagePhotographer) this.imagePhotographer.textContent = data.photographer;
      
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      if (thumbnails[index]) thumbnails[index].classList.add('active');
      
      if (this.options.fadeTransition) {
        this.mainImage.style.opacity = '1';
      }
    }, this.options.fadeTransition ? 200 : 0);
  }

  openModal(imageData) {
    if (!this.modal) return;
    
    this.modal.style.display = 'block';
    this.modalImg.src = imageData.src;
    this.modalCaption.textContent = `${imageData.title} - ${imageData.location}`;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (!this.modal) return;
    
    this.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  bindEvents() {
    if (this.options.enableModal && this.modal) {
      this.modalClose.onclick = () => this.closeModal();
      this.modal.onclick = (e) => {
        if (e.target === this.modal) this.closeModal();
      };
    }

    if (this.options.keyboardNavigation) {
      document.addEventListener('keydown', (event) => {
        if (this.modal && this.modal.style.display === 'block') {
          if (event.key === 'Escape') {
            this.closeModal();
          }
          return;
        }

        let newIndex = this.currentIndex;
        
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          newIndex = (this.currentIndex + 1) % this.imageData.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          newIndex = (this.currentIndex - 1 + this.imageData.length) % this.imageData.length;
        }
        
        if (newIndex !== this.currentIndex) {
          this.updateMainImage(newIndex);
        }
      });
    }
  }
}