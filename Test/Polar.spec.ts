import { Polar } from "../assets/Script/Polar";
import { assert, expect } from "chai";
import { Vector2 } from "../assets/Script/Vector2";


function AreVectorsEqual(veca:Vector2,vecb:Vector2){
    assert.approximately(veca.xPos,vecb.xPos,0.001);
    assert.approximately(veca.yPos,vecb.yPos,0.001);
}

describe('Polar',()=>{

    describe('GetVector',()=>{
        
        it('Polar2,1/3PI get vector should return vector1,3',()=>{
            let polar = new Polar(2,1/3*Math.PI);
            AreVectorsEqual(new Vector2(1,Math.sqrt(3)),polar.GetVector());
        })

        it('Polar2,1/3PI get vector length should eqaul to Polar2,2/3PI',()=>{
            let vector1 = new Polar(2,1/3*Math.PI).GetVector();
            let vector2 = new Polar(2,2/3*Math.PI).GetVector();
            assert.approximately(vector1.Mag(),vector2.Mag(),0.01);
        })

        it('Polar2,1/3PI get vector length should eqaul to Polar2,Neg2/3PI',()=>{
            let vector1 = new Polar(2,1/3*Math.PI).GetVector();
            let vector2 = new Polar(2,-2/3*Math.PI).GetVector();
            assert.approximately(vector1.Mag(),vector2.Mag(),0.01);
        })

    })

    describe('RotateCW',()=>{
        it('Polar2,1/3PI RotateCW 30 degree, GetDegree should return 30',()=>{
            let polar = new Polar(2,1/3*Math.PI);
            polar.RotateCW(30);
            assert.approximately(polar.GetDegree(),30,0.01);
        })
    })

    describe('SetPivot',()=>{
        it('pivot point(3,0) Polar(2,1/3PI) rotateCW 60 and getVecot should return vecot(5,0),',()=>{
            let polar = new Polar(2,1/3*Math.PI);
            polar.SetPivot(new Vector2(3,0));
            polar.RotateCW(60);
            assert.approximately(polar.GetVector().xPos,5,0.01);
        });

    })

});

