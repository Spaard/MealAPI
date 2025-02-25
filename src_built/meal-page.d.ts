/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MealPage extends LitElement {
    static styles: import("lit").CSSResult;
    mealId: string;
    name: string;
    category: string;
    imageUrl: string;
    ingredients: string[];
    instructions: string;
    area: string;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'meal-page': MealPage;
    }
}
//# sourceMappingURL=meal-page.d.ts.map