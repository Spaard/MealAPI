var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
        <a href="#">Accueil</a>
        <a href="#">Recettes</a>
        <a href="#">Favoris</a>
        <a href="#">À propos</a>
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
    }


    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 0; 
      height: 100%;
      background-color: #333;
      overflow-x: hidden;
      transition: width 0.3s;
      padding-top: 60px;
    }


    .sidebar.open {
      width: 250px; 
    }

    .sidebar a {
      display: block;
      color: white;
      padding: 15px;
      text-decoration: none;
      font-size: 18px;
      transition: 0.3s;
    }

    .sidebar a:hover {
      background-color: #575757;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 30px;
      color: white;
      cursor: pointer;
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
    }

    .overlay.show {
      display: block;
    }
  `;
__decorate([
    property({ type: Boolean })
], DropdownFilter.prototype, "isOpen", void 0);
DropdownFilter = __decorate([
    customElement('dropdown-filter')
], DropdownFilter);
export { DropdownFilter };
//# sourceMappingURL=dropdown-filter%20copy.js.map