var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let smallDrop = class smallDrop extends LitElement {
    constructor() {
        super(...arguments);
        this.isOpen = false;
        this.filterName = 'Filter';
    }
    render() {
        return html `
      <div class="dropdown">
        <div @click="${this.toggleDropdown}" class="dropbtn">${this.filterName}</div>
        <div class="dropdown-content ${this.isOpen ? 'show' : ''}">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    `;
    }
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
};
smallDrop.styles = css `
  :host {
    display: block;
    width: 89%; 
  }

  .dropdown {
    width: 100%; 
    position: relative;
    display: block;
  }

  .dropbtn {
    cursor: pointer;
    width: 100%; 
    padding: 15px;
    font-size: 20px;
    transition: 0.3s;
    text-align: left; 
  }

  .dropbtn:hover, .dropbtn:focus {
    background-color: #575757;
    color: white;
  }

  .dropdown-content {
    display: none;
    position: relative;
    width: 100%;
    z-index: 1;
    padding-left:15px;
  }

  .dropdown-content.show {
    display: block;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    font-size: 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #575757;
    color: white;
  }
`;
__decorate([
    property({ type: Boolean })
], smallDrop.prototype, "isOpen", void 0);
__decorate([
    property({ type: String })
], smallDrop.prototype, "filterName", void 0);
smallDrop = __decorate([
    customElement('small-drop')
], smallDrop);
export { smallDrop };
//# sourceMappingURL=small-drop.js.map