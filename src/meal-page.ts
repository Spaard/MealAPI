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

  @property({type: Number})
  count = 0;

  override render() {
    return html`
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

}

declare global {
  interface HTMLElementTagNameMap {
    'meal-page': MealPage;
  }
}
