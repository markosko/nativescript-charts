import {Observable} from "data/observable";
import {NativescriptCharts} from "./nativescript-charts";

export class HelloWorldModel extends Observable {
  public message: string;
  private nativescriptCharts: NativescriptCharts;

  constructor() {
    super();

    
  }
}