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
let HeaderElement = class HeaderElement extends LitElement {
    render() {
        return html `
        <div style="border : thick double black">
            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.HzgWWLsamjCtqW4YJFoVagHaHZ&pid=Api">
                <h1><span style="color:red">Let</span><span style="color:green">Me</span><span style="color:red">Cook</span>!</h1>
            </div>
            <div>
                <button @click=${this._onClick} part="button"></button>
                <input type="text" placeholder="Search a dish :">
            </div>
        </div>
    `;
    }
    _onClick() {
        console.log("Clicked");
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
    img {
        width: 5vw;
        aspect-ratio : 1 / 1;
    }
    h1 {
        font-size : 4vw;
        margin : 0;
    }
    button {
        background-image : url("https://tse4.mm.bing.net/th?id=OIP.0kufT9tRfo3w1Km6mVBOuwHaHa&pid=Api");
        background-size: contain;
        cursor : pointer;
        width: 3vw;
        aspect-ratio : 1 / 1;
        padding : 1vh;
    }
    input {
        width: 30vw;
        height: 5vh;
        font-size: 2vw;
        margin : 1vw;
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