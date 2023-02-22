import { useEffect } from "react"

interface iMonitorClick{
    ref:React.MutableRefObject<any>,
    callBack:Function,
    isOutside:boolean
}

export default function useMonitorClickOnElement(ref:React.MutableRefObject<any>,callBackFn:Function, isOutside:boolean = true){
    useEffect(()=>{
        function handleClick(event:any){
            if(isOutside && ref.current && !ref.current.contains(event.target)){
                callBackFn()
            }
            if(!isOutside && ref.current && ref.current.contains(event.target)){
                callBackFn()
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }

    },[ref])
}