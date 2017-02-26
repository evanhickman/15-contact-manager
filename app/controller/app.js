import FormView from '../view/form';
import ListView from '../view/list';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.FormView = new FormView(el.querySelector('.contact-form'), store);
    this.ListView = new ListView(el.querySelector('.grid'), store);
  }

  created() {
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.FormView.mounted();
    this.ListView.mounted();

    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      contacts: JSON.parse(window.localStorage.contacts || '[]')
    });
  }
}
