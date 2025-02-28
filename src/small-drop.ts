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

  override render() {
    return html`
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

  private toggleDropdown() {
    this.isOpen = !this.isOpen; 
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'small-drop': smallDrop;
  }
}
