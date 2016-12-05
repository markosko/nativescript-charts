declare var com;
//let cLegend = com.github.mikephil.charting.components.Legends;
export interface Dataset{
    valueTextColor?:string|number,
    valueTextColors?:Array<string|number>,
    valueTextSize?:number,
    drawValues?:boolean,
    highlightEnabled?:boolean,
    drawVerticalHighlightIndicator?:boolean,
    drawHorizontalHighlightIndicator?:boolean
}