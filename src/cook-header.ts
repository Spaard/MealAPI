/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

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

  override render() {
    return html`
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

  private _onClick() {
    console.log("Clicked");
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'cook-header': HeaderElement;
  }
}
