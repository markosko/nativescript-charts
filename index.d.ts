/**
 * iOS and Android apis should match.
 * It doesn't matter if you export `.ios` or `.android`, either one but only one.
 */
export * from "./nativescript-charts.android";

// Export any shared classes, constants, etc.
export * from "./nativescript-charts.common";
export * from "./line-chart";
export * from "./components/legend/index.android";
