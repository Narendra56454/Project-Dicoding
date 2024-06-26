/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favouriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
