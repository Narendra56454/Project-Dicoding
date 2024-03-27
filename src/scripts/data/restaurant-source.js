import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async recommendation() {
    const response = await fetch(API_ENDPOINT.RECOMMENDATION);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseData = await response.json();
    return responseData.restaurant;
  }
}

export default RestaurantSource;
