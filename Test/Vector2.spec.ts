import { assert } from "chai";
import { Vector2 } from "../assets/Script/Vector2";
import { Polar } from "../assets/Script/Polar";

function ArePolarEqual(a:Polar,b:Polar){
    assert.approximately(a.length_,b.length_,0.01);
    assert.approximately(a.radious_,b.radious_,0.01);
}

describe('Vector2',()=>{

    describe('Sub',()=>{

        it('vector68 sub vector34 should equal to vector34',()=>{
            let vector68 = new Vector2(6,8);
            let vector34 = new Vector2(3,4);
            const result = vector68.Sub(vector34);
            assert.equal(vector34.xPos,result.xPos);
            assert.equal(vector34.yPos,result.yPos);
        })

    })

    describe('GetPolar',()=>{
        it('vector1,Sqr3 GetPolar should return Polar2,1/3PI',()=>{
            let vector1Sqr3 = new Vector2(1,Math.sqrt(3))
            ArePolarEqual(vector1Sqr3.GetPolar(),new Polar(2,Math.atan(Math.sqrt(3))));
        })

    })

    describe('Mag',()=>{

        it('vector34 mag should return 5',()=>{
            let vector34 = new Vector2(3,4);
            assert.equal(5,vector34.Mag());
        })

        it('vectorNeg34 mag should return 5',()=>{
            let vector34 = new Vector2(-3,4);
            assert.equal(5,vector34.Mag());
        })

        it('vectorNeg1Sqrt3 mag should return 2',()=>{
            let vector34 = new Vector2(1,Math.sqrt(3));
            assert.notStrictEqual(2,vector34.Sub(new Vector2(0,0)).Mag());
        })

        it('vector68 sub vector34 and Mag should return 5',()=>{
            let vector68 = new Vector2(6,8);
            let vector34 = new Vector2(3,4);
            const result = vector68.Sub(vector34);
            assert.equal(5,result.Mag());
        })

    })

   

})