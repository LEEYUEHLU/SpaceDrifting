import { assert } from "chai";
import { RadiusDegreeConverter } from "../assets/Script/RadiusDegreeConverter";


let radiusDegreeConverter_:RadiusDegreeConverter;

function SetUp(){
    radiusDegreeConverter_ = new RadiusDegreeConverter();
}

describe('RadiusDegreeConverter',()=>{
    beforeEach(SetUp);
    describe('GetDegreeByRadius',()=>{


        it('GetDegree of 1/3 PI shoud return 60',()=>{
            assert.approximately(radiusDegreeConverter_.GetDegreeByRaius(Math.PI/3),60,0.01);
        })

        it('GetDegree of -1/3 PI shoud return 60',()=>{
            assert.approximately(radiusDegreeConverter_.GetDegreeByRaius(-Math.PI/3),300,0.01);
        })

        

    })
})

