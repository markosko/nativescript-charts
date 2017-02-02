# Chart plugin for Nativescript
Standalone plugin, **not part of Telerik UI**

Android uses https://github.com/PhilJay/MPAndroidChart

iOS not implemented

Plugin for now contains Line chart type

## Line type:

Add namespace `xmlns:LineChart="nativescript-charts/line-chart"` 

*chartSettings* are type of `ILineChart`
*chartData* are type of `ILineSeries`
Each point is object of `{x,y}`
Both can be imported from `nativescript-charts/line-chart` 

### Example for LineChart

```typescript
var points  = [
    {x:1,y:4},
    {x:3,y:5.9},
    {x:7,y:4},
    {x:8,y:10},
    {x:10,y:1}
];

var lineData:ILineSeries = {
    lineData: points,
    color:"green",
    name:"test",  
};

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
        enabledDescription:false,
        drawGridBackground:false,
    }
};
```

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" 
    xmlns:LineChart="nativescript-charts/line-chart">
    <LineChart:LineChart  chartSettings="{{chartSettings}}" chartData="{{chartData}}"/>
</Page>
```