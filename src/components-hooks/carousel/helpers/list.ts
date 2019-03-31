import {MutableRefObject} from "react";

export function paddingLeft(list:MutableRefObject<HTMLDivElement>) {
    return list.current.clientWidth * 0.5 -
        (list.current.firstChild as HTMLElement).clientWidth * 0.5;
}

export function paddingRight(list:MutableRefObject<HTMLDivElement>) {
    return list.current.clientWidth * 0.5 -
        (list.current.lastChild as HTMLElement).clientWidth * 0.5;
}
