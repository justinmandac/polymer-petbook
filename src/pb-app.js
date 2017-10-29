(() => {
  'use-strict';

  /** @record */
  class AppRoute {
    constructor() {

    }
  }

  class PetbookApp extends Polymer.Element {

    static get is() { return 'pb-app'; }

    static get properties() {
      return {
        drawerOpened: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
        },

        route: {
          type: Object,
          value: () => ({}),
        },

        routeData: {
          type: Object,
          value: () => ({}),
        },

        subroute: {
          type: Object,
          value: () => ({}),
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

    static get observers() {
      return [
        '_onRouteChanged(routeData)'
      ];
    }

    ready() {
      super.ready();
      this.unresolved = false;
    }

    _handleMenuClick() {
      this.drawerOpened = !this.drawerOpened;
    }

    _onRouteChanged(routeData) {
      // Make sure that route-handling only executes once.
      Polymer.Base.debounce('routeData-debouncer', () => {
        console.log(routeData, this.subroute);
      }, 100)
    }
  }

  customElements.define(PetbookApp.is, PetbookApp);
})();