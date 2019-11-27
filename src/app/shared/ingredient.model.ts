//Creating the class in this model which will store the propreties of the ingredients
export class Ingredient {
  //OLD METHODT: Creating the propreties with the public and type of the inputs
   /*public name: string ;
   public amount: number;*/

   //NEW METHOD: Creating just constructor inisde the class and in the arguments section pased the arguments with the keyword public and the type. The typescript will automaticly form the propraties with public keyword and it will create the propraties with passing parameters in the constructor. This will to same as the old method but we do not have to write it. We only write constructor and pase the parametars we want
   constructor(public name: string, public amount: number){

    //OLD METHOD: Assigne the passing arguments from constructor in the propreties with public key so we can catch it from another function 
        /*this.name = name;
        this.amount = amount;  */
   }
}