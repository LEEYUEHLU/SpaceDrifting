import { Vector2 } from "./Vector2";
import { RadiusDegreeConverter } from "./RadiusDegreeConverter";

export class Polar{
   

    length_:number;
    radious_:number;
    radiusDegreeConverter_:RadiusDegreeConverter;

    constructor(length:number,radious:number){
        this.length_ = length;
        this.radious_ = radious;
        this.radiusDegreeConverter_ = new RadiusDegreeConverter();
    }

    GetVector():Vector2 {
        let vector = new Vector2(this.length_*Math.cos(this.radious_),this.length_*Math.sin(this.radious_));
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
}
    


