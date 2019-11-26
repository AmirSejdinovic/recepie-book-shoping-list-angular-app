import { Component, OnInit } from '@angular/core';
//importung model
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
//creating the recipes variable with calling the class from my model after that i manualy call the method and passed it arguments
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is the test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
