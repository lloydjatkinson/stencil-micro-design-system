import { Padding, Margin, PaddingLeft, PaddingRight, PaddingTop, MarginLeft, MarginRight, MarginTop, MarginBottom, PaddingBottom } from "./units";

export const padding = (left: PaddingLeft, right: PaddingRight, top: PaddingTop, bottom: PaddingBottom) => {
    const lookup = (value: Padding): string => {
        switch (value) {
            case Padding.PaddingLeft: return `pl-${value}`;
            case Padding.PaddingRight: return `pr-${value}`;
            case Padding.PaddingTop: return `pt-${value}`;
            case Padding.PaddingBottom: return `pb-${value}`;
        };
    };

    return `${lookup(left)} ${lookup(right)} ${lookup(top)} ${lookup(bottom)}`;
};

export const margin = (left: MarginLeft, right: MarginRight, top: MarginTop, bottom: MarginBottom) => {

    const css = (strings, ...values) => {
        let result = '';
        strings.forEach((string, index) => {
            if (values[index]) {
                result += string + values[index];
            }
        });

        return result;
    }

    const result = css`ml-${left} mr-${right} mt-${top} mb-${bottom}`;
    console.log(result);

    return result;
};