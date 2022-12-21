import { html, css, LitElement } from 'lit';

export class VelInput extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--vel-input-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      placeholder: { type: String }
    };
  }

  constructor() {
    super();
    this.placeholder = '';
  }

  render() {
    return html`
     <input type='text' placeholder=${this.placeholder}>
    `;
  }
}
