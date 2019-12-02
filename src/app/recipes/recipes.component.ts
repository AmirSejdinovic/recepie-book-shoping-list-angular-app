import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  //Creating the proprety empty with definition of type
    selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
 

}
