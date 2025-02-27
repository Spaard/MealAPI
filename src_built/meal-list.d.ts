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
    mainIngredients: string[];
};
export declare class MealListElement extends LitElement {
    static styles: import("lit").CSSResult;
    mealSearch: string;
    _dishDataMining: Task<[string], Dish[]>;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'meal-list': MealListElement;
    }
}
export {};
//# sourceMappingURL=meal-list.d.ts.map