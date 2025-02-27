/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Task} from '@lit/task';
import './meal-element';

type Dish = {
  idMeal: string;
  name: string;
  category: string;
  instructions: string;
  urlImage: string;
  mainIngredients: string[];
};

@customElement('meal-list')
export class MealListElement extends LitElement {
  static override styles = css``;

  _dishDataMining = new Task(this, {
    args: () => ['test'],
    task: async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      );
      if (!response.ok) {
        throw new Error('Server response error');
      }
      const data = await response.json();
      return data.meals.map((meal : any) : Dish => ({
        idMeal: meal.idMeal,
        name: meal.strMeal,
        category: meal.strCategory,
        instructions: meal.strInstructions,
        urlImage: meal.strMealThumb,
        mainIngredients : [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3]
      }));
    },
  });

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
  override render() {
    return html`${this._dishDataMining.render({
      initial: () => html`<p>Waiting to start task</p>`,
      pending: () => html`<p>Running task...</p>`,
      complete: (dishes: Dish[]) =>
        html`${dishes.map(
          (dish: Dish) => html`
            <meal-element
              idMeal=${dish.idMeal}
              name=${dish.name}
              category=${dish.category}
              instructions=${dish.instructions}
              urlImage=${dish.urlImage}
              .mainIngredients=${dish.mainIngredients}
            ></meal-element>
          `
        )}`,
    })}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meal-list': MealListElement;
  }
}
