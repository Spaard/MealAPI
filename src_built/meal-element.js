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
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MealElement = class MealElement extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <div class="container"> 
        <img class="image-preview" src="../images/test.jpg">
        <div class="infos-preview">
          <span class="dish-name">Nom du plat</span>
          <span class="cook-time">Temps de cook</span>
          <span class="main-ingredients">Ingrédients principaux</span>
        </div>
      </div>
    `;
    }
};
MealElement.styles = css `
    
    :host {
      display: block;
      border: solid 1px lightgray;
      padding: 16px;
      max-width: 70vw;
      margin-left: 10vw;
      margin-top: 16px;
    } 
    
    h1 {
      color:blue;
    }

    .image-preview {
      box-sizing: border-box;
      width: 15vw;
      max-width:300px;
    }

    .infos-preview{
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      //gap: 10%;
    }

    .container{
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .dish-name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .cook-time {
      color: gray;
    }

    .main-ingredients{
      color: gray;
      padding-top: 5vw;
    }
  `;
__decorate([
    property({ type: Number })
], MealElement.prototype, "count", void 0);
MealElement = __decorate([
    customElement('meal-element')
], MealElement);
export { MealElement };
//# sourceMappingURL=meal-element.js.map