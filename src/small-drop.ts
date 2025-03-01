import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('small-drop')
export class smallDrop extends LitElement {

  @property({type: Boolean})
  isOpen = false;

  static override styles = css`
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


@property({type: String})
filterName = 'Filter';

@property({type: String})
filterLetter = '';

@property({type: Array})
filterOptions: string[] = [];

@property({type: String})
key = '';

override async firstUpdated() {

  if (this.filterName === 'Category') {
    this.filterLetter = 'c';
    this.key = 'strCategory';
  } else if (this.filterName === 'Main Ingredient') {
    this.filterLetter = 'i';
    this.key = 'strIngredient';
  } else if (this.filterName === 'Area') {
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

        
      } else {
        console.error('Erreur lors de la récupération du plat:', response.status);
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  }


  override render() {
    return html`
      <div class="dropdown">
        <div @click="${this.toggleDropdown}" class="dropbtn">${this.filterName}</div>
        <div class="dropdown-content ${this.isOpen ? 'show' : ''}">
        ${this.filterOptions.length > 0 
          ? this.filterOptions.map((item) => html`
              <a href="index.html?mealSearch=${encodeURIComponent(`https://www.themealdb.com/api/json/v1/1/filter.php?${this.filterLetter}=${item}`)}">
                ${item}
              </a>
            `)
          : html`<a href="index.html?mealSearch=${'https://www.themealdb.com/api/json/v1/1/search.php?s='}">No ingredient available</a>`
        }
        </div>
      </div>
    `;
  }

  private toggleDropdown() {
    this.isOpen = !this.isOpen; 
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'small-drop': smallDrop;
  }
}
