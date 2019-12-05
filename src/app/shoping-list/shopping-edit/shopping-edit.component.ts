import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //Creating the propreties
   @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
   @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
   

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  //Creating the method
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmoun = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(ingName, ingAmoun);
     this.slService.addIngredient(newIngredient);
    
  }

}
