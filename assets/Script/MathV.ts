import { Vector2 } from "./Vector2";

export class MathV{
    
    static Dot(a:Vector2,b:Vector2):number {
        return a.xPos*b.xPos + a.yPos*b.yPos;
    }

    static SubBy(sub:Vector2,subtrd:Vector2) : Vector2{ 
        return new Vector2(sub.xPos-subtrd.xPos , sub.yPos-subtrd.yPos);
    }
}