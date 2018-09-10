import { Vector2 } from "./Vector2";
import { RadiusDegreeConverter } from "./RadiusDegreeConverter";

export class Polar{
    
   

    length_:number;
    radious_:number;
    radiusDegreeConverter_:RadiusDegreeConverter;
    pivot_:Vector2;

    constructor(length:number,radious:number,pivot:Vector2 = new Vector2(0,0)){
        this.length_ = length;
        this.radious_ = radious;
        this.radiusDegreeConverter_ = new RadiusDegreeConverter();
        this.pivot_ = pivot;
    }

    GetVector():Vector2 {
        let vector = new Vector2(
            this.pivot_.xPos+ this.length_*Math.cos(this.radious_),
            this.pivot_.yPos+ this.length_*Math.sin(this.radious_)
        );
        return vector;
    }

    GetDegree() {
        return   this.radiusDegreeConverter_.GetDegreeByRaius(this.radious_);
    }

    RotateCW(degree:number) {
        this.radious_  = this.radiusDegreeConverter_.GetRadiusByDegree( this.radiusDegreeConverter_.GetDegreeByRaius(this.radious_)- degree);
    }

    RotateCCW(degree:number) {
        this.radious_  = this.radiusDegreeConverter_.GetRadiusByDegree( this.radiusDegreeConverter_.GetDegreeByRaius(this.radious_)+ degree);
    }

    SetPivot(pivot:Vector2) {
        this.pivot_ = pivot;
    }

    GetPivot():Vector2{
        return this.pivot_;
    }

}
    


