import React from "react";
import { SpeedType } from "../utils/types";
import { ReactNode } from "react";
interface SpeedContextInterface{
       speed:SpeedType;
       setSpeed:(speed:SpeedType)=>void;
}

export const SpeedContext=React.createContext<SpeedContextInterface | undefined>(undefined);
export const SpeedProvider=({children}:{children:ReactNode})=>{
              const [speed,setSpeed]=React.useState<SpeedType>(0.5);
              return (
                     <SpeedContext.Provider value={
                            {speed,setSpeed}
                     }>{children}</SpeedContext.Provider>
              )
}