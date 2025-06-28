import { GalleryManager } from './gallery-shared.js';

document.addEventListener('DOMContentLoaded', () => {
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

  new GalleryManager(imageData, {
    enableModal: true,
    fadeTransition: true,
    keyboardNavigation: true,
    hoverPreview: true
  });
});