/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('meal-element')
export class MealElement extends LitElement {

  @property({type : String})
  idMeal = "Test Id";

  @property({type : String})
  name = "Name of the dish";

  @property({type : String})
  category = "Category of the dish";

  @property({type : String})
  instructions = "Lets cook the recipe..."

  @property({type : String})
  urlImage = "../images/test.jpg"

  @property({type : Array})
  mainIngredients : string[] = ["Test ingr1", "Test ingr2", "Test ingr3"]

  static override styles = css`
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
      height: 15vw;
      aspect-ratio : 1 / 1;
      box-sizing: border-box;
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

  override render() {
    return html`
      <div class="container"> 
        <img class="image-preview" src=${this.urlImage}>
        <div class="infos-preview">
          <span class="dish-name">${this.name}</span>
          <span class="cook-time">Temps de cook : 40min</span>
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
}

declare global {
  interface HTMLElementTagNameMap {
    'meal-element': MealElement;
  }
}
