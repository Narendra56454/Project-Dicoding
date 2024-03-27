import Recommendation from '../views/pages/recommendation';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favourite';

const routes = {
  '/': Recommendation,
  '/restaurantList': Recommendation,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
