import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './small-drop';

@customElement('dropdown-filter')
export class DropdownFilter extends LitElement {

  @property({ type: Boolean })
  isOpen = false; // Gère l'état du menu latéral

  static override styles = css`
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

  override render() {
    return html`

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

  private toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dropdown-filter': DropdownFilter;
  }
}
