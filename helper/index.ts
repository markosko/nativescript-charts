import {Color} from "color";
export function resolveColor(color:string|number){
    if(typeof color == "string" && Color.isValid(color)){
        return new Color(<string>color).argb;
    }
    else if(typeof color == "number"){
        return new Color(<number>color).argb
    }
    return new Color("black").argb
}