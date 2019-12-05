import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

//Creating ts class which will heled services proprety
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient>();
  //Making the proprety with private keywordt I do this because I do not want to anyone to accest to this proprety otuside of this class
  private ingredients: Ingredient[]  = [
    //Calling the class of model and passig the parametars
    new Ingredient('Appels', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    //Returning the ingrediants proprety in slice etc creating new copy of array
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}