export interface BaseChartSettings {
    backgroundColor?: string | number;
    enabledDescription?: boolean;
    description?: string;
    descriptionColor?: string | number;
    descriptionPosition?: {
        x: number;
        y: number;
    };
    descriptionTextSize?: number;
    noDataText?: string;
    drawGridBackground?: boolean;
    gridBackgroundColor?: string | number;
    drawBorders?: boolean;
    borderColor?: string | number;
    borderWidth?: number;
    maxVisibleValueCount?: number;
}
