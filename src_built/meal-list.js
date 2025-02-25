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
import { Task } from '@lit/task';
import './meal-element';
let MealListElement = class MealListElement extends LitElement {
    constructor() {
        super(...arguments);
        this._dishDataMining = new Task(this, {
            args: () => ['test'],
            task: async () => {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                if (!response.ok) {
                    throw new Error('Server response error');
                }
                const data = await response.json();
                /**return data.meals.map((meal : any) : Dish => ({
                  idMeal: meal.idMeal,
                  name: meal.strMeal,
                  category: meal.strCategory,
                  instructions: meal.strInstructions,
                  urlImage: meal.strMealThumb,
                  mainIngredients : [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3]
                }));*/
                const data2 = data.meals.map((meal) => ({
                    idMeal: meal.idMeal,
                    name: meal.strMeal,
                    category: meal.strCategory,
                    instructions: meal.strInstructions,
                    urlImage: meal.strMeal === 'Migas'
                        ? 'https://tse3.mm.bing.net/th?id=OIP.QNc-r97rLf2qAfX9jT2g4wHaE0&pid=Api'
                        : meal.strMealThumb,
                    mainIngredients: [
                        meal.strIngredient1,
                        meal.strIngredient2,
                        meal.strIngredient3,
                    ],
                }));
                console.log(data2);
                return data2;
            },
        });
    }
    /**override render() {
      return html`
        <div class="container">
          <img class="image-preview" src="../images/test.jpg">
          <div class="infos-preview">
            <span class="dish-name">Nom du plat</span>
            <span class="cook-time">Temps de cook</span>
            <span class="main-ingredients">Ingrédients principaux</span>
          </div>
        </div>
      `;
    }*/
    /**mainIngredients = ${dish.mainIngredients}*/
    render() {
        return html `${this._dishDataMining.render({
            initial: () => html `<p>Waiting to start task</p>`,
            pending: () => html `<p>Running task...</p>`,
            complete: (dishes) => html `${dishes.map((dish) => html `
            <meal-element
              idMeal=${dish.idMeal}
              name=${dish.name}
              category=${dish.category}
              instructions=${dish.instructions}
              urlImage=${dish.urlImage}
              .mainIngredients=${dish.mainIngredients}
            ></meal-element>
          `)}`,
        })}`;
    }
};
MealListElement.styles = css ``;
MealListElement = __decorate([
    customElement('meal-list')
], MealListElement);
export { MealListElement };
//# sourceMappingURL=meal-list.js.map