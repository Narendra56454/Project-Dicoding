import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import '../templates/custom-element';

const Like = {
  async render() {
    return `
      <section id="mainContent" class="main-content">
        <h2>Favourite</h2>
        <div id="contentContainer" class="content-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#contentContainer');
    restaurantContainer.innerHTML = '';
    console.log(restaurants);
    if (restaurants.length === 0) {
      const main = document.querySelector('#mainContent');
      main.innerHTML += '<p class="empty-msg">Tidak ada restorant favorit</p>';
    } else {
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;
        restaurantContainer.appendChild(restaurantCard);
      });
    }
  },
};

export default Like;
