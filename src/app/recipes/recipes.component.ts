import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  //Creating the proprety empty with definition of type
    selectedRecipe: Recipe;

  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.RecipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
 

}
