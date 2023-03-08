import { useRef } from "react";

export default function useDebounce(execFunc: Function, delay = 500){

    let timeoutRef = useRef<number>();

    return function (this: any, ...args: any[]) {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => execFunc.apply(this, args), delay);
    };

};