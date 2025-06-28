import { GalleryManager } from './gallery-shared.js';

document.addEventListener('DOMContentLoaded', () => {
  const imageData = [
    {
      src: '/img-gallery/Gallery00011.jpg',
      title: '2000m Steeple',
      description: '15/08/2020, Barendrecht Twinson Energie Steeple Meeting.',
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
      description: '27/05/2017, Junioren C/D Poule 59 Wedstrijd 2',
      location: 'Spijkenisse',
      photographer: 'Koen Imholz'
    },
    {
      src: '/img-gallery/Gallery00015.jpg',
      title: '800m',
      description: '05/06/2024 C.A.V. Xtra Energie Track Meeting',
      location: 'Barendrecht',
      photographer: 'Koen Imholz'
    }
  ];

  new GalleryManager(imageData, {
    enableModal: false,
    fadeTransition: true,
    keyboardNavigation: true,
    hoverPreview: true
  });
});