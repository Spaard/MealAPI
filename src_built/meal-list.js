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
import { Task } from '@lit/task';
import './meal-element';
let MealListElement = class MealListElement extends LitElement {
    constructor() {
        super(...arguments);
        this.mealSearch = '';
    }
    async firstUpdated() {
        const params = new URLSearchParams(window.location.search);
        this.mealSearch = params.get('mealSearch') || '';
        console.log(this.mealSearch);
        this._dishDataMining = new Task(this, {
            args: () => [this.mealSearch],
            task: async ([searchTerm]) => {
                console.log(`Fetching meals for: ${searchTerm}`);
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                if (!response.ok) {
                    throw new Error('Server response error');
                }
                const data = await response.json();
                return data.meals ? data.meals.map((meal) => ({
                    idMeal: meal.idMeal,
                    name: meal.strMeal,
                    category: meal.strCategory,
                    instructions: meal.strInstructions,
                    urlImage: meal.strMealThumb,
                    mainIngredients: [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3],
                })) : [];
            },
        });
        this.requestUpdate();
    }
    ;
    render() {
        return html `
      ${this._dishDataMining
            ? this._dishDataMining.render({
                initial: () => html `<p>Waiting to start task...</p>`,
                pending: () => html `<p>Loading meals...</p>`,
                complete: (dishes) => dishes.length > 0
                    ? html `${dishes.map((dish) => html `
                      <meal-element
                        idMeal=${dish.idMeal}
                        name=${dish.name}
                        category=${dish.category}
                        instructions=${dish.instructions}
                        urlImage=${dish.urlImage}
                        .mainIngredients=${dish.mainIngredients}
                      ></meal-element>
                    `)}`
                    : html `
                <div class="no-meal">
                  <p style="color: #300d11; font-weight: bold;">Aucun plat trouvé.</p>
                </div>
                
                `,
            })
            : html `<p>Loading...</p>`}
    `;
    }
};
MealListElement.styles = css `
  
  .no-meal {
    display: block;
      border: solid 3px black;
      border-radius : 20px;
      padding: 16px;
      max-width: 70vw;
      margin-left: 10vw;
      margin-top: 16px;
      background-color : #d3e8f8dc;
      transition: transform 0.3s ease;
  }
  
  `;
__decorate([
    property({ type: String })
], MealListElement.prototype, "mealSearch", void 0);
MealListElement = __decorate([
    customElement('meal-list')
], MealListElement);
export { MealListElement };
//# sourceMappingURL=meal-list.js.map