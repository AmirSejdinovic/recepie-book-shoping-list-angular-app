//Creating ts class which will be a blueprint for our recipes
export class Recipe {
  //creating the propraties with public keyword. The public keyword allow us to access to the proprati from anywhare. Here in typescript we declare the type of the propraty
   public name: string;
   public description: string;
   public imagePath: string;

    //Constructor is the method in every class which will run after the class is caled
   constructor(name:string, description: string, imagePath: string){
     this.name = name;
     this.description = description;
     this.imagePath = imagePath;
   }
}