var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './small-drop';
let DropdownFilter = class DropdownFilter extends LitElement {
    constructor() {
        super(...arguments);
        this.isOpen = false; // Gère l'état du menu latéral
    }
    render() {
        return html `

      <button @click="${this.toggleMenu}" class="menu-button">☰</button>

      <div class="overlay ${this.isOpen ? 'show' : ''}" @click="${this.toggleMenu}"></div>

      <div class="sidebar ${this.isOpen ? 'open' : ''}">
        <span class="close-btn" @click="${this.toggleMenu}">&times;</span>
        <div class="sidebar-content">
          <a href="#">Home</a>

          <small-drop filterName="Category"></small-drop>
          <small-drop filterName="Main Ingredient"></small-drop>
          <small-drop filterName="Area"></small-drop>

        </div>
      </div>
    `;
    }
    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
};
DropdownFilter.styles = css `
    .menu-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      padding: 10px;
      position: relative;
      z-index: 3;
    }

    .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2; 
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
    }

    .overlay.show {
      display: block;
      opacity: 1;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      height: 100%;
      background-color: #d3e8f8f2;
      overflow-x: hidden;
      transition: transform 0.3s ease-in-out;
      transform: translateX(-100%);
      z-index: 3;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .sidebar-content {
      padding: 60px 15px;
      color: black;
      display: flex;
      flex-direction: column;
    }

    .sidebar a {
      display: block;
      color: black;
      padding: 15px;
      text-decoration: none;
      font-size: 20px;
      transition: 0.3s;
    }

    .sidebar a:hover {
      background-color: #575757;
      color: white;
    }

    .sidebar p {
      display: block;
      color: black;
      padding: 15px;
      text-decoration: none;
      font-size: 18px;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 30px;
      color: black;
      cursor: pointer;
    }

  `;
__decorate([
    property({ type: Boolean })
], DropdownFilter.prototype, "isOpen", void 0);
DropdownFilter = __decorate([
    customElement('dropdown-filter')
], DropdownFilter);
export { DropdownFilter };
//# sourceMappingURL=dropdown-filter.js.map