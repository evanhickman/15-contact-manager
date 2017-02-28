import FormView from '../view/form';
import ListView from '../view/list';

import { findAll } from '../actions';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.formView = new FormView(el.querySelector('.contact-form'), store);
    this.listView = new ListView(el.querySelector('.grid'), store);
  }

  created() {
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.formView.mounted();
    this.listView.mounted();

    this.store.dispatch(findAll());
  }
}
