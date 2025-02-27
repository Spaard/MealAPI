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
let MealElement = class MealElement extends LitElement {
    constructor() {
        super(...arguments);
        this.idMeal = "Test Id";
        this.name = "Name of the dish";
        this.category = "Category of the dish";
        this.instructions = "Lets cook the recipe...";
        this.urlImage = "../images/test.jpg";
        this.mainIngredients = ["Test ingr1", "Test ingr2", "Test ingr3"];
    }
    render() {
        return html `
      <div class="container" @click="${this.handleClick}" style="cursor:pointer;"> 
        <img class="image-preview" src=${this.urlImage}>
        <div class="infos-preview">
          <span class="dish-name">${this.name}</span>
          <span class="cook-time">Category : ${this.category}</span>
          <span class="main-ingredients">Main ingredients :</span>
          <ul style="margin : 0">
            <li>${this.mainIngredients[0]}</li>
            <li>${this.mainIngredients[1]}</li>
            <li>${this.mainIngredients[2]}</li>
          </ul>
        </div>
      </div>
    `;
    }
    handleClick() {
        window.location.href = `recipe.html?mealId=${this.idMeal}`;
    }
};
MealElement.styles = css `
    :host {
      display: block;
      border: solid 3px black;
      border-radius : 20px;
      padding: 16px;
      max-width: 70vw;
      margin-left: 10vw;
      margin-top: 16px;
      background-color : #7ab9ea;
      transition: transform 0.3s ease;
    }

    :host(:hover) {
      transform: scale(1.1);
    }
    
    h1 {
      color:blue;
    }

    .image-preview {
      height: 15vw;
      aspect-ratio : 1 / 1;
      box-sizing: border-box;
      border: solid 2px white;
      border-radius : 5px;
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
      align-items: center;
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
    property({ type: String })
], MealElement.prototype, "idMeal", void 0);
__decorate([
    property({ type: String })
], MealElement.prototype, "name", void 0);
__decorate([
    property({ type: String })
], MealElement.prototype, "category", void 0);
__decorate([
    property({ type: String })
], MealElement.prototype, "instructions", void 0);
__decorate([
    property({ type: String })
], MealElement.prototype, "urlImage", void 0);
__decorate([
    property({ type: Array })
], MealElement.prototype, "mainIngredients", void 0);
MealElement = __decorate([
    customElement('meal-element')
], MealElement);
export { MealElement };
//# sourceMappingURL=meal-element.js.map