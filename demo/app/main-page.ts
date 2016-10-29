import * as observable from "data/observable";
import * as pages from "ui/page";
import colorModule = require("color");
var Color = colorModule.Color;
import {LineChart} from "nativescript-charts/line-chart";


// Event handler for Page "loaded" event attached in main-page.xml
declare var com:any;
declare var java:any;
declare var Array:any;

var line;

export function pageLoaded(args: observable.EventData) {
    // Get the event sender
   

    let page = <pages.Page>args.object;
    var StackLayout:any=page.getViewById("lay");
    
    line = new LineChart();
    line.height=700;
    StackLayout.addChild(line);

    var points  = [
        {x:1,y:1},
        {x:3,y:5},
        {x:7,y:0},
        {x:8,y:4.5},
        {x:10,y:9}
    ];
    
    var lineData = {
        lineData: points,
        color:"red",
        name:"test"
    };

    line.addLine(lineData);
    var points2  = [
        {x:1,y:4},
        {x:3,y:5.9},
        {x:7,y:4},
        {x:8,y:10},
        {x:10,y:1}
    ];
    var lineData2 = {
        lineData: points2,
        color:"green",
        name:"test"
    };

    line.addLine(lineData2);

    

}

export function addLine(args: observable.EventData){
    var points2  = [
        {x:1,y:(Math.random() * 10) + 1},
        {x:3,y:(Math.random() * 10) + 1},
        {x:7,y:(Math.random() * 10) + 1},
        {x:8,y:(Math.random() * 10) + 1},
        {x:10,y:(Math.random() * 10) + 1}
    ];
      
    var lineData2 = {
        lineData: points2,
        color:"green",
        name:"test"
    };

    line.addLine(lineData2);
}

export function clearData(args: observable.EventData){
    line.clearData();
}
export function clearGraph(args: observable.EventData){
    line.clearGraph();
}