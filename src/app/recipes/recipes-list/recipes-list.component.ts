import { Component, OnInit } from '@angular/core';
//importung model
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
  recipes: Recipe[];
   //Usig the ts shortcut for insatntli assignig the poprety with the same name
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }
  

}
