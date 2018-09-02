export class RadiusDegreeConverter{

    GetRadiusByDegree(degree:number){
        return this.CheckDegree(degree)/180*Math.PI
    }

    GetDegreeByRaius(radious:number){
        let degree = this.CheckDegree(180 * radious/Math.PI);
        return degree
    }

    CheckDegree(degree:number):number{
        if(0>degree){
            degree+=360;
        }
        return degree;
    }
}


