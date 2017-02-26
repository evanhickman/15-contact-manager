export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  created() {
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.store.dispatch()
  }
}
