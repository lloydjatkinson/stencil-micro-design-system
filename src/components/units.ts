export type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

export type PaddingLeft = Size;
export type PaddingRight = Size;
export type PaddingTop = Size;
export type PaddingBottom = Size;
export enum Padding {
    PaddingLeft,
    PaddingRight,
    PaddingTop,
    PaddingBottom
};

export type MarginLeft = Size;
export type MarginRight = Size;
export type MarginTop = Size;
export type MarginBottom = Size;
export enum Margin {
    MarginLeft,
    MarginRight,
    MarginTop,
    MarginBottom
};

export type Level = 1 | 2 | 3 | 4;