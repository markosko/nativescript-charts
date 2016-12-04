declare var com;
//let cLegend = com.github.mikephil.charting.components.Legends;

export enum LegendHorizontalAlignment{
    LEFT = com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment.LEFT,
    CENTER = com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment.CENTER, 
    RIGHT = com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment.RIGHT
}
export enum LegendVerticalAlignment {
    TOP = com.github.mikephil.charting.components.Legend.LegendVerticalAlignment.TOP,
    CENTER = com.github.mikephil.charting.components.Legend.LegendVerticalAlignment.CENTER, 
    BOTTOM = com.github.mikephil.charting.components.Legend.LegendVerticalAlignment.BOTTOM
}

export enum LegendForm{
    SQUARE = com.github.mikephil.charting.components.Legend.LegendForm.SQUARE,
    CIRCLE = com.github.mikephil.charting.components.Legend.LegendForm.CIRCLE,
    LINE  = com.github.mikephil.charting.components.Legend.LegendForm.LINE

}

export interface ILegend{
  enabled?:boolean,
  textColor?: string|number,
  wordWrap?:boolean,
  maxSize?:number,
  form?: LegendForm
}