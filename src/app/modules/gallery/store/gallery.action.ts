import { createAction } from '@ngrx/store';

export const GALLERY_ACTIONS = {
  LOAD_PHOTOS: '[Gallery] load all photos',
};
export const loadBooks = createAction(GALLERY_ACTIONS.LOAD_PHOTOS);
