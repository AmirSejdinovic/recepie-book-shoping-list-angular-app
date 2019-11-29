import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Creating the proprety of the loadedFeature with asignin the starter value.
  loadedFeature = 'recipe';
  //Creating the method which I called on the template file and passing the reciving arguments and updating the proprety from top
  onNavigate(feature: string){
     this.loadedFeature = feature;
  }
}
