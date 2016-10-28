import {Common} from "./nativescript-charts.common";
import appModule = require("application");
import fs = require("file-system");

declare var com:any;

export class NativescriptCharts extends Common {
    constructor() {
        super();
        //this.message = Utils.SUCCESS_MSG();
                if (typeof(com.github.mikephil.charting) === "undefined") {
                    console.log("error");
                }else{
                    console.log("OK");
                }
    
    }
}