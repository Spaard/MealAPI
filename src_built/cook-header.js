/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './dropdown-filter';
let HeaderElement = class HeaderElement extends LitElement {
    render() {
        return html `
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
    _onClick() {
        const inputElement = this.shadowRoot?.querySelector("#meal-search");
        if (inputElement) {
            let searchQuery = encodeURIComponent(inputElement.value.trim());
            console.log(searchQuery);
            if (searchQuery) {
                searchQuery = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchQuery;
                console.log(searchQuery);
                window.location.href = `index.html?mealSearch=${searchQuery}`;
            }
            else {
                window.location.href = `index.html?mealSearch=${'https://www.themealdb.com/api/json/v1/1/search.php?s='}`;
            }
        }
    }
    _onEnterPress(event) {
        if (event.key === "Enter") {
            this._onClick();
        }
    }
    handleClick() {
        window.location.href = `index.html?mealSearch=${'https://www.themealdb.com/api/json/v1/1/search.php?s='}`;
    }
};
HeaderElement.styles = css `
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
HeaderElement = __decorate([
    customElement('cook-header')
], HeaderElement);
export { HeaderElement };
//# sourceMappingURL=cook-header.js.map