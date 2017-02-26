class ItemView {
  constructor(contact, store) {
    this.contact = contact;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid-item');

    this.el.innerHTML = `
    <div class="grid-item">
      <div class="contact-card">
        <h1 class="contact-card__name"></h1>
        <p class="contact-card__street"></p>
        <p class="contact-card__city-state"></p>
        <button class="button button-delete contact-card__delete">Delete</button>
      </div>
    </div>`;
  }

  render() {
    this.el.querySelector('contact-card__name').innerText = this.contact.$`{contact.first} {contact.last}`;
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
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
