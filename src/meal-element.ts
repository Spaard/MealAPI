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

  override render() {
    return html`
      <div class="container"> 
        <img class="image-preview" src=${this.urlImage}>
        <div class="infos-preview">
          <span class="dish-name">${this.name}</span>
          <span class="cook-time">Temps de cook</span>
          <span class="main-ingredients">Ingrédients principaux</span>
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
