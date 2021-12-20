// <course-card></course-card>
import { html } from "./utils.js";
import ActionButton from "./course-card-actionButton.js";

export default class CourseCardWithMenu extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

    this.MyShadowRoot = this.attachShadow({ "mode": "open" });

    this.courseId = this.getAttribute("courseId") || "-";
    this.courseName = this.getAttribute("courseName") || "-";
    this.classes = this.getAttribute('classes') || 'light';

    const actionButtons = this.getAttribute("data-actionButtons");

    this.actions = JSON.parse(actionButtons) || [];

    this.template_actionButton = document.createElement("template");
    this.template_actionButton.innerHTML = `<div class="course-card-action-menu-item" data-type="mainAction"></div>`;



    // this.MyShadowRoot.querySelector(".course-card-maintext").addEventListener("click",
    // e => {
    //   alert(`${this.courseId} - ${this.courseName}`);
    //   //this.classList.add("clicked");
    // });


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

  RenderActionButtons() {

    if (Array.isArray(this.actions)) {

      this.actions
        .map(el => {
          //console.log(el.text);
         
          const btn = document.createElement("div");
          btn.className = "course-card-action-menu-item";
          btn.setAttribute("data-type", el.type);
          btn.innerText = el.text;
          //btn.cursor
          btn.addEventListener("click", e => this.ActionButtonClick(this, el.id));

          this.MyShadowRoot.querySelector(".course-card-action-menu").appendChild(btn);


/*

          const btn = document.createElement("course-card-actionButton");
          
          btn.type=el.type;
          btn.text= el.text;
          btn.buttonId = el.id;
          //btn.addEventListener("actionButtonClicked", e => this.ActionButtonClick(this, el.id));
          this.MyShadowRoot.querySelector(".course-card-action-menu").appendChild(btn);
*/
        })

      // return this.actions
      //   .map(element => `<div class="course-card-action-menu-item" data-type="mainAction" onclick="this.ActionButtonClick('${element.id}')">${element.text}</div>`)
      //   .reduce( (prev, cur) => prev + cur, "")
    }
  }

  ShowCourseName() {
    alert(this.courseName);
  }
  
  MyFx() {
    
  }

  connectedCallback() {

    console.log("CONNECTED***");
    this.MyShadowRoot.innerHTML = html`
    <link rel="stylesheet" href="./../styles/componentstyle.css">
      
      <div class="course-card ${this.classes}">
        <input type="checkbox" id="baseButton">
        <label for="baseButton">
          <div class="course-card-maintext">
            <div class="courseId">${this.courseId}</div>
            <div class="courseName">${this.courseName}</div>
          
          <div class="course-card-action-menu">
              <slot name="actionButtons"></slot>
              <!-- <div class="course-card-action-menu-item" data-type="mainAction" onclick="alert('MainAction')">info</div>
              <div class="course-card-action-menu-item" data-type="secondaryAction" onclick="alert('Info')">schedule</div>
              <div class="course-card-action-menu-item" data-type="secondaryAction" onclick="alert('Secondary')">journal</div>
              <div class="course-card-action-menu-item" data-type="secondaryAction" onclick="alert('...')"></div>
               -->
          </div>
</div>
        </label>
      </div>`;
    

      this.RenderActionButtons();

      //   this.shadowRoot.querySelector(".courseId").addEventListener("click",
    //       e => {
    //           alert(this.courseId);
    //       })

  }


  disconnectedCallback() {

  }

  attributeChangedCallback(attrName, oldVal, newVal) {

  }

  whenClick(e) {

    alert("hey");
  }
}

window.customElements.define('course-card-with-menu', CourseCardWithMenu);

