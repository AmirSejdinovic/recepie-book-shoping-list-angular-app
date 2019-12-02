import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //Creating the emiter 
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    //Updatieng the emiter
     this.recipeSelected.emit();
  }

}
