import { Vector2 } from "./Vector2";

export class MathV{

    static SubBy(sub:Vector2,subtrd:Vector2) : Vector2{ 
        return new Vector2(sub.xPos-subtrd.xPos , sub.yPos-subtrd.yPos);
    }
}