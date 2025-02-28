/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './dropdown-filter';

@customElement('cook-header')
export class HeaderElement extends LitElement {
  static override styles = css`
    div {
        display : flex;
        flex-direction : row;
        justify-content : space-between;
        align-items : center;
        margin : 0;
    }
    .container {
        border : thick double black;
        //border-radius : 0px 0px 30px 0px;
        background-color : white;
        
    }
    img {
        width: 5vw;
        aspect-ratio : 1 / 1;
    }
    h1 {
        font-size : 4vw;
        margin : 0;
    }
    button {
        background-image : url("../images/magnifier.png");
        background-size: contain;
        cursor : pointer;
        width: 3vw;
        aspect-ratio : 1 / 1;
        padding : 1vh;
        border-radius : 3px;
    }
    input {
        width: 30vw;
        height: 5vh;
        font-size: 2vw;
        margin : 1vw;
        border-radius : 10px;
        background-color : #cae8ff;
        padding-left: 15px;
    }
    input::placeholder {
        color : red;
        opacity : 0.7;
    }
  `;

  override render() {
    return html`
        <div class="container">
          <div>
            <dropdown-filter></dropdown-filter>
            <div @click="${this.handleClick}" style="cursor:pointer;">
                <img src="../images/logo.png">
                <h1><span style="color:red">Let</span><span style="color:green">Me</span><span style="color:red">Cook</span>!</h1>
            </div>
          </div>
          
            <div>
                <button @click=${this._onClick} part="button"></button>
                <input id="meal-search" type="text" placeholder="Search a dish :" @keydown="${this._onEnterPress}">
            </div>
        </div>
    `;
  }

  private _onClick() {
    const inputElement = this.shadowRoot?.querySelector("#meal-search") as HTMLInputElement;
    if (inputElement) {
        const searchQuery = encodeURIComponent(inputElement.value.trim());
        if (searchQuery) {
            window.location.href = `index.html?mealSearch=${searchQuery}`;
        } else {
          window.location.href = `index.html?mealSearch=${''}`;
        }
    }
}

private _onEnterPress(event: KeyboardEvent) {
  if (event.key === "Enter") {
    this._onClick();
  }
}

  handleClick() {
    window.location.href = `index.html`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'cook-header': HeaderElement;
  }
}
