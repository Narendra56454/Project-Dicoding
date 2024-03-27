/* eslint-disable no-undef */
Feature('Review Restaurant');

Scenario('Write review for one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-name a', 5);
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());

  const name = 'Cristiano Messi';
  const review = 'Makanannya enak!';

  I.waitForElement('#reviewForm', 5);
  I.seeElement('#reviewForm');
  I.fillField('#name', name);
  I.fillField('#review', review);
  I.click('Submit Review');

  I.waitForText('Review added successfully', 5, '#toast-container');
  I.see('Review added successfully');

  within('#reviewContainer', () => {
    I.waitForElement('.review', 5);
    I.see(name);
    I.see(review);
  });
});
