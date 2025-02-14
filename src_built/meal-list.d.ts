/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import { Task } from '@lit/task';
import './meal-element';
type Dish = {
    idMeal: string;
    name: string;
    category: string;
    instructions: string;
    urlImage: string;
};
export declare class MealListElement extends LitElement {
    static styles: import("lit").CSSResult;
    _dishDataMining: Task<readonly ["test"], Dish[]>;
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
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'meal-list': MealListElement;
    }
}
export {};
//# sourceMappingURL=meal-list.d.ts.map