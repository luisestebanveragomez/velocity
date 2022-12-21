import { html, css, LitElement } from 'lit';

export class VelButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--vel-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  render() {
    return html` <button>${this.text}</button> `;
  }
}
