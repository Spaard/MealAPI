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
        this.mealId = '';
        this.name = 'Nom du plat';
        this.category = 'category';
        this.imageUrl = '../images/test.jpg';
        this.ingredients = [];
        this.quantities = [];
        this.instructions = '';
        this.area = '';
    }
    async firstUpdated() {
        // Récupération de l'id du plat à partir de l'URL
        const params = new URLSearchParams(window.location.search);
        this.mealId = params.get('mealId') || '';
        console.log('id:' + this.mealId);
        if (this.mealId) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`);
                if (response.ok) {
                    let data = await response.json();
                    data = data.meals[0];
                    console.log(data);
                    this.name = data.strMeal;
                    this.imageUrl = data.strMealThumb;
                    this.category = data.strCategory;
                    this.area = data.strArea;
                    this.instructions = data.strInstructions;
                    this.ingredients = [];
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = data[`strIngredient${i}`];
                        if (ingredient && ingredient.trim() !== '') {
                            this.ingredients.push(ingredient);
                        }
                    }
                    this.quantities = [];
                    for (let i = 1; i <= 20; i++) {
                        const quantity = data[`strMeasure${i}`];
                        if (quantity && quantity.trim() !== '') {
                            this.quantities.push(quantity);
                        }
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
    }
    render() {
        return html `
      <div class="container"> 
        <span class="dish-name">${this.name}</span>
        <div class="infos-container">
          <div class="dish-tags">Category : ${this.category}</div>
          <span class="meal-category"></span>
        </div>
        <div class="infos-container">
          <div class="dish-tags">Area : ${this.area}</div>
          <span class="meal-category"></span>
        </div>
        <hr class="dotted">
        <img class="image" src="${this.imageUrl}" alt="Image du plat">
        <span>Ingredients :</span>
        <ul class="ingredients">
          ${this.ingredients.length > 0
            ? this.ingredients.map((item, index) => html `<li>${item} (${this.quantities[index]})</li>`)
            : html `<li>No ingredient available</li>`}
        </ul>
        <hr class="dotted">
        <span class="preparation">Preparation :</span>
        <div class="preparation">${this.instructions}</div>
      </div>
    `;
    }
};
MealPage.styles = css `
    
    
    /*
    :host {
      display: block;
      border: solid 3px black;
      //border-radius : 20px 20px 20px 20px;
      padding: 16px;
      max-width: 70vw;
      margin-left: 10vw;
      margin-top: 16px;
      margin-bottom : 1vh;
    } 
    */
    
    
    div.container{
      border: solid 3px black;
      padding: 16px;
      max-width: 70vw;
      margin-left: 10vw;
      margin-top: 16px;
      margin-bottom : 1vh;
      box-sizing: border-box;
      border-radius : 20px 20px 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1vh;
      background-color : #d3e8f8c1;

    }

    .infos-container {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 5px;
    }

    hr.dotted {
      border-top: 3px dotted #3f424e;
      width: 100%; 
    }

    .image {
      height: 50vh;
      width: auto;
      max-width: 100%;
      display: block;
      object-fit: cover;
      margin-bottom : 2vh;
      border: solid 2px white;
      border-radius : 5px;
    }

    .dish-name {
      font-size: 2rem;
      font-weight: bold;
    }

    .meal-category{
      color: gray;
    }

    .ingredients{
      margin-block-start: 0;
    }
  `;
__decorate([
    property({ type: String })
], MealPage.prototype, "mealId", void 0);
__decorate([
    property({ type: String })
], MealPage.prototype, "name", void 0);
__decorate([
    property({ type: String })
], MealPage.prototype, "category", void 0);
__decorate([
    property({ type: String })
], MealPage.prototype, "imageUrl", void 0);
__decorate([
    property({ type: Array })
], MealPage.prototype, "ingredients", void 0);
__decorate([
    property({ type: Array })
], MealPage.prototype, "quantities", void 0);
__decorate([
    property({ type: String })
], MealPage.prototype, "instructions", void 0);
__decorate([
    property({ type: String })
], MealPage.prototype, "area", void 0);
MealPage = __decorate([
    customElement('meal-page')
], MealPage);
export { MealPage };
//# sourceMappingURL=meal-page.js.map