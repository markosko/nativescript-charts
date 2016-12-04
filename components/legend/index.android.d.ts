export declare enum LegendHorizontalAlignment {
    LEFT,
    CENTER,
    RIGHT,
}
export declare enum LegendVerticalAlignment {
    TOP,
    CENTER,
    BOTTOM,
}
export declare enum LegendForm {
    SQUARE,
    CIRCLE,
    LINE,
}
export interface ILegend {
    enabled?: boolean;
    textColor?: string | number;
    wordWrap?: boolean;
    maxSize?: number;
    form?: LegendForm;
}
