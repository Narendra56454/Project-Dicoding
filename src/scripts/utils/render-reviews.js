import { createReviewTemplate } from '../views/templates/template-creator';

const renderReviews = (reviews) => {
  const reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML = '';
  reviews.forEach((review) => {
    const reviewElement = createReviewTemplate(review);
    reviewContainer.innerHTML += reviewElement;
  });
};

export default renderReviews;
