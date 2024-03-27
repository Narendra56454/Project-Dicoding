import CONFIG from '../../globals/config';

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.classList.add('content-wrapper');
    this.render();
  }

  render() {
    const {
      name, city, rating, description, pictureId, id,
    } = this._restaurant;

    this.innerHTML = `
      <div>
        <p class="restaurant-location">${city}</p>
        <img class="restaurant-img" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">
        <div class="content-detail-wrapper">
          <p class="restaurant-rating">⭐️${rating}</p>
          <h3 class="restaurant-name"><a href="/#/detail/${id}">${name}</a></h3>
          <p class="restaurant-desc">${description ? description.substring(0, 100) : ''}...</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
