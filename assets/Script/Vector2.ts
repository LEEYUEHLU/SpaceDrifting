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

    Mag(pivot:Vector2 = new Vector2(0,0)):number{
        let xDiffer = this.xPos-pivot.xPos;
        let yDiffer = this.yPos-pivot.yPos;
        return Math.sqrt(xDiffer*xDiffer + yDiffer*yDiffer); 
    }

    Normalize(){
        return new Vector2(this.xPos/this.Mag(),this.yPos/this.Mag());
    }

    GetPolar(pivot:Vector2 = new Vector2(0,0)){
        let xDiffer =this.xPos - pivot.xPos;
        let yDiffer =this.yPos - pivot.yPos;
        let radious = Math.atan(yDiffer/xDiffer);
        if(0<xDiffer && 0<yDiffer){
        }
        else if(0>xDiffer && 0<yDiffer){
            radious += Math.PI;
        }
        else if(0>xDiffer && 0>yDiffer){
            radious += Math.PI;
        }
        else{
            radious +=Math.PI*2;
        }

        let polar = new Polar(this.Mag(pivot),radious,pivot);
        return polar;
    }

}