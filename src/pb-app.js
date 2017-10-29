(() => {
  class PetbookApp extends Polymer.Element {

    static get is() { return 'pb-app'; }

    static get properties() {
      return {
        drawerOpened: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
        },

        unresolved: {
          type: Boolean,
          value: true,
          reflectToAttribute: true,
        },

        _smallScreen: {
          type: Boolean,
          value: true,
        },
      };
    }

    ready() {
      super.ready();
      this.unresolved = false;
    }

    _handleMenuClick() {
      this.drawerOpened = !this.drawerOpened;
    }
  }

  customElements.define(PetbookApp.is, PetbookApp);
})();