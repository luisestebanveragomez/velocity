import { html, css, LitElement } from 'lit';

export class VelCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--vel-card-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
      placeholder: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.placeholder = '';
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
