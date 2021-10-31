import galleryCardsTpl from '../templates/gallery-cards.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const imagesMarcap = galleryCardsTpl(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarcap);

const lightBox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});