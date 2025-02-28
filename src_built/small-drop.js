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
        this.filterLetter = '';
        this.filterOptions = [];
        this.key = '';
    }
    async firstUpdated() {
        if (this.filterName === 'Category') {
            this.filterLetter = 'c';
            this.key = 'strCategory';
        }
        else if (this.filterName === 'Main Ingredient') {
            this.filterLetter = 'i';
            this.key = 'strIngredient';
        }
        else if (this.filterName === 'Area') {
            this.filterLetter = 'a';
            this.key = 'strArea';
        }
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${this.filterLetter}=list`);
            if (response.ok) {
                let data = await response.json();
                data = data.meals;
                this.filterOptions = [];
                for (let i = 0; i < data.length; i++) {
                    const option = data[i][this.key];
                    this.filterOptions.push(option);
                }
            }
            else {
                console.error('Erreur lors de la récupération du plat:', response.status);
            }
        }
        catch (error) {
            console.error('Erreur réseau :', error);
        }
    }
    render() {
        return html `
      <div class="dropdown">
        <div @click="${this.toggleDropdown}" class="dropbtn">${this.filterName}</div>
        <div class="dropdown-content ${this.isOpen ? 'show' : ''}">
        ${this.filterOptions.length > 0
            ? this.filterOptions.map((item) => html `<a href=#>${item}</a>`)
            : html `<a href=#>No ingredient available</a>`}
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
__decorate([
    property({ type: String })
], smallDrop.prototype, "filterLetter", void 0);
__decorate([
    property({ type: Array })
], smallDrop.prototype, "filterOptions", void 0);
__decorate([
    property({ type: String })
], smallDrop.prototype, "key", void 0);
smallDrop = __decorate([
    customElement('small-drop')
], smallDrop);
export { smallDrop };
//# sourceMappingURL=small-drop.js.map