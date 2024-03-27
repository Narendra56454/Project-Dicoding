const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    // close drawer when window resize if it's open
    window.addEventListener('resize', (event) => {
      this._updateDrawerStyles(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _updateDrawerStyles(event, drawer) {
    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth >= 600;

    if (isLargeScreen) this._closeDrawer(event, drawer);
  },
};

export default DrawerInitiator;
