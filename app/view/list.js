import { remove } from '../actions';

class ItemView {
  constructor(contact, store) {
    this.contact = contact;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid-item');

    this.el.innerHTML = `
      <div class="contact-card">
        <h1 class="contact-card__name"></h1>
        <p class="contact-card__street"></p>
        <p class="contact-card__city"></p>
        <p class="contact-card__state"></p>
        <button class="button button-delete contact-card__delete">Delete</button>
      </div>`;
  }


  mounted() {
    this.el.querySelector('.contact-card__delete').addEventListener('click', () => {
      this.store.dispatch(remove(this.contact.id));
    });
  }

  render() {
    this.el.querySelector('.contact-card__name').innerText = `${this.contact.first} ${this.contact.last}`;
    this.el.querySelector('.contact-card__street').innerText = `${this.contact.street}`;
    this.el.querySelector('.contact-card__city').innerText = `${this.contact.city}`;
    this.el.querySelector('.contact-card__state').innerText = `${this.contact.state}`;
  }
}

export default class ListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;
    contacts.forEach((data) => {
      const view = new ItemView(data, this.store);
      view.mounted();
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
