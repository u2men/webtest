// <mng-news></mng-news>
import { html } from "./utils.js";
class MngNews extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.buttonText = this.getAttribute("txt");

    this.innerHTML=html`<button>${ this.buttonText }</button>`
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('mng-news', MngNews);