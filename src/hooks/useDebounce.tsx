export default function useDebounce(execFunc: Function, delay = 500){

    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => execFunc.apply(this, args), delay);
    };

};