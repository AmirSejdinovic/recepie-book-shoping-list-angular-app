import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
//importung model
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  //creating the emiter
  @Output() recipeJeOdabran = new EventEmitter<Recipe>();
  recipes: Recipe[];
   //Usig the ts shortcut for insatntli assignig the poprety with the same name
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe){
    //Updating the emiter
      this.recipeJeOdabran.emit(recipe);

  }

}
