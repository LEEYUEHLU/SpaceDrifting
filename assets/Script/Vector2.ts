import { Polar } from "./Polar";

export class Vector2{
    
   
    xPos:number = 0;
    yPos:number = 0;

    constructor(x:number,y:number){
        this.xPos = x;
        this.yPos = y;
    }

    Sub(subVector:Vector2):Vector2{
        this.xPos-=subVector.xPos;
        this.yPos-=subVector.yPos;
        return this;
    }


    Mag():number{
        return Math.sqrt(this.xPos*this.xPos + this.yPos*this.yPos); 
    }

    GetPolar(){
        let polar = new Polar(this.Mag(),Math.atan(this.yPos/this.xPos));
        return polar;
    }

}