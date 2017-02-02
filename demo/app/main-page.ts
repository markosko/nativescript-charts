import * as observable from "data/observable";
import * as pages from "ui/page";
import colorModule = require("color");

var Color = colorModule.Color;
import {LineChart,LegendHorizontalAlignment,XPosition,YPosition,ILineChart,ILineSeries,LegendForm}  from "nativescript-charts/line-chart";
//LineChart.LegendHorizontalAlignment;
//import * as legend from "nativescript-charts/components/legend";

// Event handler for Page "loaded" event attached in main-page.xml
declare var com:any;
declare var java:any;
declare var Array:any;

var line:LineChart;
var graph1:LineChart;
var i=0;
var obj=observable.fromObjectRecursive({
    chartSettings:{},
    chartData:{}
});
var boolValue=true;
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
   


    let page = <pages.Page>args.object;
    
    var StackLayout:any=page.getViewById("lay");
    //console.log(1)
    var linechartOpts:ILineChart= <ILineChart>{
        Legend:{
            enabled:false,
            form:LegendForm.CIRCLE,
        },
        XAxis:{
            textSize:12,
            textColor:"green",
            position:XPosition.TOP,
            axisMinimum:-30,
            axisMaximum:30,
            drawGridLines:false,
            showOnlyMinMax:false,
            enabled:true
        },
        RightYAxis:{
            textSize:10,
            textColor:"green",
            position:YPosition.OUTSIDE_CHART,
            axisMaximum:120,
            axisMinimum:-10,
            showOnlyMinMax:false,
            drawGridLines:false,
            enabled:true
        },
        LeftYAxis:{
            textSize:10,
            textColor:"green",
            position:YPosition.OUTSIDE_CHART,
            axisMaximum:120,
            axisMinimum:-10,
            showOnlyMinMax:false,
            drawGridLines:false,
            enabled:true
        },
        BaseSettings:{
            //backgroundColor:"black",
            enabledDescription:false,
            drawGridBackground:false,
        }
    };
    
    graph1=<LineChart>page.getViewById("graph1");
    line = <LineChart>(new LineChart(linechartOpts));
    //console.log(2)
    line.height=700;
    //console.log(3)
    StackLayout.addChild(line);
    //console.log(4)
    var chartData=[];
    
    /*var points  = [
        {x:-25,y:0},
        {x:-25,y:25}  
    ];
    var lineData = {
        lineData: points,
        color:"green",
        name:"test"
    };*/
    chartData.push(addData(
        {x:-30,y:0},{x:-30,y:0},true
    ));
    chartData.push(addData(
        {x:30,y:0},{x:30,y:0},true
    ));
    chartData.push(addData(
        {x:-5,y:0},
        {x:-5,y:20}
    ));
    chartData.push(addData(
        {x:-5,y:20},
        {x:-25,y:20}
    ));
    chartData.push(addData(
        {x:-25,y:20},
        {x:-5,y:40}
    ));
    chartData.push(addData(
        {x:-5,y:40},
        {x:-20,y:40}
    ));
    chartData.push(addData(
        {x:-20,y:40},
        {x:-5,y:60}
    ));
    chartData.push(addData(
        {x:-5,y:60},
        {x:-15,y:60}
    ));
    chartData.push(addData(
        {x:-15,y:60},
        {x:-5,y:80}
    ));
    chartData.push(addData(
        {x:-5,y:80},
        {x:-10,y:80}
    ));
    chartData.push(addData(
        {x:-10,y:80},
        {x:0,y:100}
    ));
    chartData.push(addData(
        {x:0,y:100},
        {x:10,y:80}
    ));
    chartData.push(addData(
        {x:10,y:80},
        {x:5,y:80}
    ));
    chartData.push(addData(
        {x:5,y:80},
        {x:15,y:60}
    ));
    chartData.push(addData(
        {x:15,y:60},
        {x:5,y:60}
    ));
    chartData.push(addData(
        {x:5,y:60},
        {x:20,y:40}
    ));
    chartData.push(addData(
        {x:20,y:40},
        {x:5,y:40}
    ));
    chartData.push(addData(
        {x:5,y:40},
        {x:25,y:20}
    ));
    chartData.push(addData(
        {x:25,y:20},
        {x:5,y:20}
    ));
    chartData.push(addData(
        {x:5,y:20},
        {x:5,y:0}
    ));
    chartData.push(addData(
        {x:5,y:0},
        {x:-5,y:0}
    ));
    //console.log(5)
    
    var chartData2=[];
    var counter = chartData.length;
    var c=0;
    line.setChartSettings(linechartOpts);
    line.setChartData(chartData);
    line.setChartSettings(linechartOpts);
    /*var timer=setInterval(()=>{
            chartData2.push(chartData[c]);
            
            line.setChartData(chartData2);            
            
            c++;
            if(c==counter)clearInterval(timer);
    },1000);*/

    

//    graph1.addLine(lineData);


    //console.log(5)
    //graph1.addLine(lineData);
    


    var points2  = [
        {x:1,y:4},
        {x:3,y:5.9},
        {x:7,y:4},
        {x:8,y:10},
        {x:10,y:1}
    ];
    var lineData2:ILineSeries = {
        lineData: points2,
        color:"green",
        name:"test",  
    };
    //console.log(6)
    //line.addLine(lineData2);
    //obj.set("chartSettings",linechartOpts);
    //obj.set("chartData",[lineData,lineData2]);
    //line.chartSettings((<any>obj).lineChartOpts);
    //console.dump(line.chartSettings);
    //line.set('chartSettings',(<any>obj).chartSettings);
    //console.dump(line);
    //console.dump(line.chartSettings);
    page.bindingContext=obj;

    //graph1.addLine(lineData2);

}

export function addLine(args: observable.EventData){
    var points2  = [
        {x:1,y:(Math.random() * 100) - 49},
        {x:3,y:(Math.random() * 100) - 49},
        {x:7,y:(Math.random() * 100) - 19},
        {x:8,y:(Math.random() * 100) - 79},
        {x:10,y:(Math.random() * 100) - 59}
    ];
        var color= Math.floor((Math.random()*16777215) - 16777216);
        var textColors=[
          Math.floor((Math.random()*16777215) - 16777216),
          Math.floor((Math.random()*16777215) - 16777216)          
        ];
      //console.log("color: " + color);

    var lineData2:ILineSeries = {
        lineData: points2,
        color:color,
        name:"test"+i,
        valueTextSize:10,
        valueTextColors:textColors,
        circleColor:color,
        drawCircleHole:false,
        circleRadius:4
    };
    i++;
    line.addLine(lineData2);
    graph1.addLine(lineData2);

}

export function clearData(args: observable.EventData){
    line.clearData();
    graph1.clearData();
}
export function clearGraph(args: observable.EventData){
    line.clear();
    graph1.clear();
}

export function editSettings(args: observable.EventData){
    let page = <pages.Page>args.object;
    boolValue=!boolValue;
    //obj.
    /*var linechartOpts:ILineChart=observable.fromObjectRecursive({
        Legend:{
            enabled:boolValue
        },
        XAxis:{
            textSize:(Math.random()*10) + 1,
            textColor:Math.floor((Math.random()*16777215) - 16777216)
            position:XPosition.BOTTOM      
        },
        RightYAxis:{
            textSize:(Math.random()*10) + 1,
            textColor:Math.floor((Math.random()*16777215) - 16777216)
        },
        LeftYAxis:{
            textSize:(Math.random()*10) + 1,
            textColor:Math.floor((Math.random()*16777215) - 16777216)
        },
        BaseSettings:{
            //backgroundColor:"black",
            enabledDescription:boolValue,
            description:"POMOOOOOOOOOOOOOOOOOC",
            noDataText:"Nemame data"
        }
    });*/
    //obj.set("chartSettings",linechartOpts);
}

function addData(point,point2,hide=false){
    return <ILineSeries>{
        lineData: [point,point2],
        color:(hide?"white":"green"),
        name:"test",
        lineWidth:3,
        drawFilled:false,
        circleColor:(hide?"white":"green"),
        circleRadius:(hide?3:0),
        drawCircleHole:false
        //fillColor:"green"
    };
}