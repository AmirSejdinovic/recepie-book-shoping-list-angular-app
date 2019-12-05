//Importing Recipe model
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


//Creating ts class which will held the services functiontality
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  //Adding the proprety of recipes with type of Recipe model and make it private. This private will disable to acces to the proprety outside of this class
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is the test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'),
  ];

  getRecipes(){
    //Returning the above proptety, this will enable to accest to this proptety via calling this method. Adding the slice() proprety will create the new array with the copy of abowe array so we can not acces to this abowe array
     return this.recipes.slice();
  }

}