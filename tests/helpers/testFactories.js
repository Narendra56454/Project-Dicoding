import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavouriteRestaurantIdb from '../../src/scripts/data/favourite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favouriteRestaurants: FavouriteRestaurantIdb,
    restaurant,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
