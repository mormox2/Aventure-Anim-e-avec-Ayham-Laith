import {
  filterTemplates,
  loadHeroesData,
  loadSuperhero,
  renderHeroesGallery,
  toggleHeroModal,
} from "./hero-gallery.js";
import {
  deleteDrawingFromGallery,
  getSavedDrawings,
  loadDrawingFromGallery,
  renderGalleryGrid,
  saveCurrentDrawingToGallery,
  saveDrawingToGallery,
  toggleGalleryModal,
} from "./drawing-gallery.js";
import {
  addFriend,
  addSampleFriends,
  celebrateName,
  getFriends,
  removeFriend,
  renderFriendBadges,
  renderFriendList,
  resetFriends,
  saveFriends,
  toggleFriendsModal,
} from "./friends.js";
import { resetApp } from "./reset-app.js";

/* Gallery facade: preserves the public API while features live in focused modules. */

export {
  resetApp,
  loadHeroesData,
  toggleHeroModal,
  renderHeroesGallery,
  filterTemplates,
  loadSuperhero,
  getSavedDrawings,
  saveDrawingToGallery,
  deleteDrawingFromGallery,
  renderGalleryGrid,
  loadDrawingFromGallery,
  saveCurrentDrawingToGallery,
  toggleGalleryModal,
  celebrateName,
  getFriends,
  saveFriends,
  addFriend,
  removeFriend,
  resetFriends,
  addSampleFriends,
  renderFriendBadges,
  renderFriendList,
  toggleFriendsModal,
};
