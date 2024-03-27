import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import RenderReview from '../../utils/render-reviews';
import AddReview from '../../globals/add-review';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section id="restaurantDetail" class="resto-detail"></section>
      <div id="likeButtonContainer"></div>
      <div class="resto-review">
        <h3>Reviews</h3>
        <div id="addReviewForm" class="add-review">
          <form id="reviewForm" class="review-form">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="review">Review:</label><br>
            <textarea id="review" name="review" required></textarea><br>
            <button type="submit">Submit Review</button>
          </form>
        </div>
        <div id="reviewContainer" class="review-container"></div>
      </div>
    `;
  },

  async afterRender() {
    const renderContent = async () => {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      const restaurantContainer = document.getElementById('restaurantDetail');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      // Create Reviews
      RenderReview(restaurant.customerReviews);

      // Create Like Button
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favouriteRestaurants: FavouriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });

      // Add New Review
      const reviewForm = document.getElementById('reviewForm');
      reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(reviewForm);
        const reviewData = {
          id: restaurant.id,
          name: formData.get('name'),
          review: formData.get('review'),
        };

        AddReview(reviewData);
      });

      // Skip content
      restaurantContainer.focus();
    };

    await renderContent();
    document.addEventListener('reviewAdded', renderContent);
  },
};

export default Detail;
