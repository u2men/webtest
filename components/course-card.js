// <course-card></course-card>
import { html } from "./utils.js";

export default class CourseCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    
      this.MyShadowRoot = this.attachShadow({ "mode": "open" });
      
      this.courseId = this.getAttribute("courseId");
      this.courseName = this.getAttribute("courseName");

      this.MyShadowRoot.innerHTML  = html`
       <style>
           .dark {background-color:#333; color:#ccc;}
           .contrast {background-color:#000; color:#fff;}
           .light {background-color:#ddd; color:#333;}

           .course-card{
            --default-shadow-color:#aaa2;
            --default-text-shadow: 1vmin 1vmin 1vmin var(--default-shadow-color);
            --default-box-shadow: 1vmin 1vmin 1vmin var(--default-shadow-color);
            --default-background-color:#f00;
            --default-margin:3vmin;

            display:flex;
            flex-flow: row nowrap;

            margin:var(--default-margin);
            padding:1vmin;

            /* background-color: var(--default-background-color); */

            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size:3vmin;

            border:0;
            border-radius: 2vmin;

            box-shadow: var(--default-box-shadow);
            text-shadow: var(--default-text-shadow);


        }
        .courseId, .courseName{
            padding:1vw;
        }
        .courseId {
            font-weight: 700;
            text-transform: uppercase;
        }

        .courseName {}

        .actionMenu{
            animation-name: ShowActionMenu;
            animation-duration: 1s;
            width:0;
            overflow: hidden;
        }

        @keyframes ShowActionMenu{

            to {
                width: 10vw;
            }
        }

    </style>
      <div class="course-card ${ this.getAttribute('classes') }">
        <div class="courseId"> ${ this.courseId } </div>
        <div class="courseName"> ${ this.courseName } </div>
    </div>`;

      this.addEventListener("click",
          e => {
              alert(`${this.courseId} - ${this.courseName}`);
              this.classList.add("clicked");
          });

    }
    
    ShowCourseName() {
        alert(this.courseName);
    }
    connectedCallback() {
    
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

window.customElements.define('course-card', CourseCard);