import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class Hyperlink extends LitElement {

  static properties = {
    link: { type: String },
    display: { type: String },
    newTab: { type: Boolean },
  };

  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hyperlink',
      fallbackDisableSubmit: false,
      version: '1.0',
      properties: {
        link: {
          type: 'string',
          title: 'Link',
          description: 'URL of the link to navigate to'
        },
        display: {
          type: 'string',
          title: 'Display Text',
          description: 'The text to display on the link'
        },
        newTab: {
            type: 'boolean',
            title: 'Open in new tab',
            description: 'Indicate whether to open the URL in a new tab',
            defaultValue: true
          }
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<a href="${this.link}" target="${this.newTab ? "_blank" : "_parent"}">${this.display}</a>`;
  }
}

// registering the web component
const elementName = 'jaam-hyperlink';
customElements.define(elementName, Hyperlink);