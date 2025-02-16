import { SpeedContext } from '../context/SpeedContext.tsx';
import {useContext} from 'react'
export const useSpeed=()=>{
  const context=useContext(SpeedContext);
  if(!context){
       throw new Error("useSpeed must be used within a SpeedProvider");
  }
  return context;
}