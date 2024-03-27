import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const createListMenu = (menus) => menus.map((menu) => `<li>${menu.name}</li>`).join('');

  const foodsHTML = `<ul>${createListMenu(restaurant.menus.foods)}</ul>`;
  const drinksHTML = `<ul>${createListMenu(restaurant.menus.drinks)}</ul>`;

  return `
  <h2 class="resto-name">${restaurant.name}</h2>
  <img class="resto-pict" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="resto-location">
    <h2>Lokasi</h2>
    <p>${restaurant.city}</p>
  </div>
  <div class="resto-address">
    <h3>Alamat</h3>
    <p>${restaurant.address}</p>
  </div>
  <div class="resto-rating">
    <h3>Rating</h3>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="resto-desc">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto-foods">
    <h3>Makanan</h3>
    ${foodsHTML}
  </div>    
  <div class="resto-drinks">
    <h3>Minuman</h3>
    ${drinksHTML}
  </div> 
  
`;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (review) => `
  <div class="review">
    <p class="reviewer">${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
  </div>
`;

export {
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createReviewTemplate,
};
