import { Component, OnInit } from '@angular/core';
//Importing the class from the module we created
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  //Creating ingredients propraty in the this class and adding it the typ of the model name (the model we created and stored in the shared folder, and here we pass the name of that class).
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
      }
    );

  } 
  

}
