import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../vel-button.js';

describe('VelButton', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<vel-button></vel-button>`);

    expect(el.text).to.equal('');
  });


  it('can override the text via attribute', async () => {
    const el = await fixture(
      html`<vel-button text="attribute title"></vel-button>`
    );

    expect(el.text).to.equal('attribute title');
  });

  /*it('passes the a11y audit', async () => {
    const el = await fixture(html`<vel-button></vel-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });*/
});
