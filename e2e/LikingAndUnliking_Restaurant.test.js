/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked favourite', ({ I }) => {
  I.seeElement('#mainContent');
  I.see('Tidak ada restorant favorit', '.empty-msg');
});

Scenario('liking one restaurant then unliking', async ({ I }) => {
  // LIKING RESTAURANT
  I.see('Tidak ada restorant favorit', '.empty-msg');

  I.amOnPage('/');

  I.waitForElement('.restaurant-name a', 5);
  I.seeElement('.restaurant-name a');

  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-name a', 5);
  I.seeElement('.restaurant-name a');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // UNLIKING THE RESTAURANT
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.see('Tidak ada restorant favorit', '.empty-msg');
});
