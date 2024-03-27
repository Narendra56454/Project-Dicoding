import RestaurantSource from '../../data/restaurant-source';
import '../templates/custom-element';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Recommendation = {
  async render() {
    return `
      <div class="hero-container">
        <picture class="hero-bg">
          <source media="(max-width: 600px)" srcset="./images/hero-img-small.jpg">
          <img class="lazyload hero-img" src="./images/hero-img-large.jpg" alt="Hero image">
        </picture>
        <p class="hero-text">"Discover Your Culinary Journey Where Every Bite Tells a Story"</p>
      </div>

      <section id="mainContent" class="main-content">
        <h2>Recommendation</h2>
        <div id="contentContainer" class="content-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.recommendation();
    const restaurantContainer = document.querySelector('#contentContainer');
    restaurantContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;
      restaurantContainer.appendChild(restaurantCard);
    });
  },
};

export default Recommendation;
