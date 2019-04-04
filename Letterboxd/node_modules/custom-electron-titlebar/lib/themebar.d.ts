import { IDisposable, Disposable } from "./common/lifecycle";
declare class ThemingRegistry extends Disposable {
    private theming;
    constructor();
    protected onThemeChange(theme: Theme): IDisposable;
    protected getTheming(): Theme[];
}
export declare class Themebar extends ThemingRegistry {
    constructor();
    protected registerTheme(theme: Theme): void;
    static readonly win: Theme;
    static readonly mac: Theme;
}
export interface CssStyle {
    addRule(rule: string): void;
}
export interface Theme {
    (collector: CssStyle): void;
}
export {};
