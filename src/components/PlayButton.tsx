import React, { MouseEventHandler } from "react";
import {GrPowerReset} from "react-icons/gr";
import {BsFillPlayFill} from "react-icons/bs";
export function PlayButton({
       handlerRunVisualizer,
       isDisabled,
       isGraphVisualized,  
}:{
       handlerRunVisualizer:MouseEventHandler<HTMLButtonElement>;
       isDisabled:boolean,
       isGraphVisualized:boolean;

}){
       return(
              <button
                 disabled={isDisabled}
                 onClick={handlerRunVisualizer}
                 className="disabled:pointer-events-none disabled:opacity-50 
                 transition ease-in rounded-full p-2.5 shadow-md
                 bg-green-500 border-none ring-green-500">
                     {isGraphVisualized ?(
                            <GrPowerReset className="w-5 h-5"/>
                     ):(
                            <BsFillPlayFill className="w-5 h-5"/>
                     )}
                 </button>
       )
}