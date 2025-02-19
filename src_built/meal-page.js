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
let MealPage = class MealPage extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <div class="container"> 
        <span class="dish-name">Nom du plat</span>
        <div class="infos-container">
          <div class="dish-tags">Tags</div>
          <span class="cook-time">- Temps de cook</span>
        </div>
        <hr class="dotted">
        <img class="image" src="../images/test.jpg">
        <span class="ingredients">Ingrédients :</span>
        <div class="ingredients"></div>
        <hr class="dotted">
        <span class="preparation">Préparation :</span>
        <div class="preparation"></div>
      </div>
    `;
    }
};
MealPage.styles = css `
    
    :host {
      display: block;
      border: solid 1px blue;
      padding: 16px;
      max-width: 70vw;
      margin-left: 10vw;
      margin-top: 16px;
    } 
    
    .container{
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3vh;
    }

    .infos-container {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 5px;
    }

    hr.dotted {
      border-top: 3px dotted #bbb;
      width: 100%; 
    }

    .image {
      height: 50vh;
      width: auto;
      max-width: 100%;
      display: block;
      object-fit: cover;
      margin: 0;
    }

    .dish-name {
      font-size: 2rem;
      font-weight: bold;
    }

    .cook-time {
      color: gray;
    }

    .ingredients{
      color: "#272727";
    }
  `;
__decorate([
    property({ type: Number })
], MealPage.prototype, "count", void 0);
MealPage = __decorate([
    customElement('meal-page')
], MealPage);
export { MealPage };
//# sourceMappingURL=meal-page.js.map