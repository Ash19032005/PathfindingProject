
import {useContext} from 'react';
import { PathFindingContext } from '../context/PathFindingContext.tsx';
export const usePathFinding = () => {
  const context=useContext(PathFindingContext);
  if(!context){
       throw new Error("usePathFinding must be used within a PathFindingProvider");
  }
  return context;
}

