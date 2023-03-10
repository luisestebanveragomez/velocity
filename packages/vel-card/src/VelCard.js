import { html, css, LitElement } from 'lit';
import '@velocity/button/vel-button';
import '@velocity/input/vel-input';

export class VelCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        background: crimson;
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

  render() {
    return html`
      <vel-button text=${this.text}></vel-button>
      <vel-input placeholder=${this.placeholder}></vel-input>
    `;
  }
}
