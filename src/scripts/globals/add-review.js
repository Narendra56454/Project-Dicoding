import API_ENDPOINT from './api-endpoint';

const showToast = (message) => {
  const toastContainer = document.getElementById('toast-container');
  toastContainer.innerText = message;
  toastContainer.classList.add('show-toast');

  setTimeout(() => {
    toastContainer.innerText = '';
    toastContainer.classList.remove('show-toast');
  }, 3000);
};

const addReview = async (review) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();

    if (responseJson.error) {
      throw new Error(responseJson.message);
    }

    document.dispatchEvent(new CustomEvent('reviewAdded'));
    showToast('Review added successfully');
  } catch (error) {
    console.error('Fail to add review:', error);
  }
};

export default addReview;
