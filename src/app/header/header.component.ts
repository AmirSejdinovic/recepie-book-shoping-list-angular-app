//Importing the oputput directive and EvetEmitter class from angualr core
import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent{
  //Creating the proprety wihic will emit the data from arguments inisde the method. I use here the Angular core class EventEmitter to emit data, and I also use the Angular directive @output which will output data from this proprety and I can catch that data from another component
  @Output() featureSelected = new EventEmitter<string>();
//Here I created the method which I call in the template file on click. There i pased the arguments for links and here i store that argumants in the parametars feature and updating the top proprety with that data and emit the value
  onSelect(feature: string){
     this.featureSelected.emit(feature);
  }

}