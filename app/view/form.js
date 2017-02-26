export default class ClassName {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (ev) => {
      ev.preventDefault();

      this.store.dispatch({
        type: 'CONTACT@CREATE',
        contacts: {
          first: this.el.querySelector('.contact-form__firstname').value,
          last: this.el.querySelector('.contact-form__lastname').value,
          street: this.el.querySelector('.contact-form__street').value,
          city: this.el.querySelector('.contact-form__city').value,
          state: this.el.querySelector('.contact-form__state').value,
        }
      });
    });
  }
}
