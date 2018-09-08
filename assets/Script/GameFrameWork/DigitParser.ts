export class DigitParser{

    GetDigitFromLeft(num:number,digitFromLeft:number):number{
        num = Math.floor(num/Math.pow(10,digitFromLeft));
        let digit = num%10;
        return digit;
    }

    GetFloatPointNumberCount(num:any):number{
       let numString:string = num+"";
       let floatPointStrings:string[] = numString.split('.');
       if(2>floatPointStrings.length){
           return 0;
       }
       return  numString.split('.')[1].length;
    }

    GetDecimalNumberCounts(num:number):number{
        let numString:string = num+"";
        if(0>num){
            return numString.split('.')[0].length-1
        }
        return numString.split('.')[0].length;
    }

}