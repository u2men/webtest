// <course-card></course-card>
import { html } from "./utils.js";

export default class ActionButtonDiv extends HTMLDivElement {
  constructor() {
    super(); 

    //this.MyShadowRoot = this.attachShadow({ "mode": "open" });

    this.buttonId = this.getAttribute("buttonId") || "";
    this.text = this.getAttribute("text") || "-";
    this.type = this.getAttribute('data-type') || 'secondaryAction';

    
  }

  ActionButtonClick(obj, elem) {

    const actionButtonClicked = new CustomEvent('actionButtonClicked', {

      detail: { el: elem, button: obj.id },
      bubbles: true,
      cancelable: true,
      composed: true
    });

    obj.dispatchEvent(actionButtonClicked);
  }


  connectedCallback() {

    this.innerHTML = html`
       <!-- <style>

        .course-card-action-menu-item{
          flex:1 1;
          flex-basis: 100px;
          cursor:pointer;

        }

       div[data-type] {

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align:center;
      }

       div[data-type="mainAction"] {
        margin:1px;
        background-color:var(--background-color-primary);
       }

       div[data-type="secondaryAction"] {
        margin:1px;
        background-color:var(--background-color-secondary);


      }
      </style> -->
    <div class="course-card-action-menu-item" buttonId="${this.id}" data-type="${this.type}">${this.text}</div>`;

    this.addEventListener("click", e => this.ActionButtonClick(this, this.buttonId));

  }


  disconnectedCallback() {

  }

  attributeChangedCallback(attrName, oldVal, newVal) {

  }

  
}

window.customElements.define('course-card-actionbuttondiv', ActionButtonDiv);