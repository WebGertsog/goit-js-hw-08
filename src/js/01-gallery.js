import galleryCardsTpl from '../templates/gallery-cards.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const imagesMarcap = createGallerysMarkap(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarcap);


function createGallerysMarkap (galleryItems){
  return galleryCardsTpl(galleryItems);
}

const lightBox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});