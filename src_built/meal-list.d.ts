/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import { Task } from '@lit/task';
import './meal-element';
/**const dishes : Dish[] = [
    {
        idMeal : "52771",
        name : "Spicy Arrabiata Penne",
        category : "Vegetarian",
        instructions : "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        urlImage : "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    },{
        idMeal : "52772",
        name : "Tortilla de patata",
        category : "Vegetarian",
        instructions : "Test of recipe",
        urlImage : "https://tse1.mm.bing.net/th?id=OIP.mA5jkJjX5oonrhLLVEsWfwHaE-&pid=Api"
    },{
        idMeal : "52771",
        name : "Spicy Arrabiata Penne",
        category : "Vegetarian",
        instructions : "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        urlImage : "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    },{
        idMeal : "52771",
        name : "Spicy Arrabiata Penne",
        category : "Vegetarian",
        instructions : "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        urlImage : "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    },{
        idMeal : "52771",
        name : "Spicy Arrabiata Penne",
        category : "Vegetarian",
        instructions : "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        urlImage : "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    },{
        idMeal : "52771",
        name : "Spicy Arrabiata Penne",
        category : "Vegetarian",
        instructions : "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        urlImage : "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    },{
        idMeal : "52771",
        name : "Spicy Arrabiata Penne",
        category : "Vegetarian",
        instructions : "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        urlImage : "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    }
]*/
export declare class MealListElement extends LitElement {
    static styles: import("lit").CSSResult;
    _dishDataMining: Task<readonly ["test"], any>;
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
//# sourceMappingURL=meal-list.d.ts.map