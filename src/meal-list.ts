/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
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
  static override styles = css`
  
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

  @property({type: String})
   mealSearch = "";

   _dishDataMining!: Task<[string], Dish[]>; 

   override async firstUpdated() {
     const params = new URLSearchParams(window.location.search);
     this.mealSearch = params.get('mealSearch') || "https://www.themealdb.com/api/json/v1/1/search.php?s=";
     console.log(typeof this.mealSearch);
   
    
     this._dishDataMining = new Task(this, {
       args: () => [this.mealSearch], 
       task: async ([searchTerm]) => {
         console.log(`Fetching meals for: ${searchTerm}`);
         const response = await fetch(searchTerm);
         if (!response.ok) {
           throw new Error('Server response error');
         }
         const data = await response.json();
         return data.meals ? data.meals.map((meal: any): Dish => ({
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
   };


   override render() {
    return html`
      ${this._dishDataMining
        ? this._dishDataMining.render({
            initial: () => html`<p>Waiting to start task...</p>`,
            pending: () => html`<p>Loading meals...</p>`,
            complete: (dishes: Dish[]) =>
              dishes.length > 0
                ? html`${dishes.map(
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
                  )}`
                : html`
                <div class="no-meal">
                  <p style="color: #300d11; font-weight: bold;">Aucun plat trouvé.</p>
                </div>
                
                `,
          })
        : html`<p>Loading...</p>`}
    `;
  }
  
  
}

declare global {
  interface HTMLElementTagNameMap {
    'meal-list': MealListElement;
  }
}
