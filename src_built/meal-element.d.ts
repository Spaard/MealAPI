/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class MealElement extends LitElement {
    idMeal: string;
    name: string;
    category: string;
    instructions: string;
    urlImage: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'meal-element': MealElement;
    }
}
//# sourceMappingURL=meal-element.d.ts.map