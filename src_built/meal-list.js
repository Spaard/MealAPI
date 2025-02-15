/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
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
let MealListElement = class MealListElement extends LitElement {
    constructor() {
        super(...arguments);
        this._dishDataMining = new Task(this, {
            args: () => ["test"],
            task: async () => {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
                if (!response.ok) {
                    throw new Error("Server response error");
                }
                const data = await response.json();
                return data.meals.map((meal) => ({
                    idMeal: meal.idMeal,
                    name: meal.strMeal,
                    category: meal.strCategory,
                    instructions: meal.strInstructions,
                    urlImage: meal.strMealThumb
                }));
            }
        });
    }
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
    render() {
        return html `${this._dishDataMining.render({
            initial: () => html `<p>Waiting to start task</p>`,
            pending: () => html `<p>Running task...</p>`,
            complete: (dishes) => html `${dishes.map((dish) => html `
        <meal-element
            idMeal = ${dish.idMeal}
            name = ${dish.name}
            category = ${dish.category}
            instructions = ${dish.instructions}
            urlImage = ${dish.urlImage}
            ></meal-element>
        `)}`
        })}`;
    }
};
MealListElement.styles = css `
  `;
MealListElement = __decorate([
    customElement('meal-list')
], MealListElement);
export { MealListElement };
//# sourceMappingURL=meal-list.js.map