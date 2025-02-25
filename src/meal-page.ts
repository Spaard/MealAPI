/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('meal-page')
export class MealPage extends LitElement {
  static override styles = css`
    
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
      gap: 1vh;
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

    .meal-category{
      color: gray;
    }

    .ingredients{
      color: "#272727";
    }
  `;

  @property({type: String})
  mealId = '';

  @property({type: String})
  name = 'Nom du plat';

  @property({type: String})
  category = 'category';

  @property({type: String})
  imageUrl = '../images/test.jpg';

  @property({type: Array})
  ingredients: string[] = [];

  @property({type: String})
  instructions = '';

  @property({type: String})
  area = '';

  override async firstUpdated() {
    // Récupération de l'id du plat à partir de l'URL
    const params = new URLSearchParams(window.location.search);
    this.mealId = params.get('mealId') || '';
    console.log(this.mealId);
  
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

          
        } else {
          console.error('Erreur lors de la récupération du plat:', response.status);
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    }
  }

  override render() {
    return html`
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
        <span class="ingredients">Ingredients :</span>
        <ul class="ingredients">
          ${this.ingredients.length > 0 
            ? this.ingredients.map(item => html`<li>${item}</li>`)
            : html`<li>No ingredient available</li>`
          }
        </ul>
        <hr class="dotted">
        <span class="preparation">Preparation :</span>
        <div class="preparation">${this.instructions}</div>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'meal-page': MealPage;
  }
}
