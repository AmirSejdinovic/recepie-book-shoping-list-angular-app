import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //Creating the propreties
   @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
   @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
   @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  //Creating the method
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmoun = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(ingName, ingAmoun);
     this.ingredientAdded.emit(newIngredient);
  }

}
