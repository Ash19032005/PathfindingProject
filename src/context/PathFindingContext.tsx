import { AlgorithmType, GridType, MazeType } from "../utils/types.ts";
import { ReactNode,useState,createContext } from "react";
import { createGrid } from "../utils/helpers.ts";
import { START_TILE_CONFIGURATION } from "../utils/constants.ts";
import { END_TILE_CONFIGURATION } from "../utils/constants.ts";
import * as React from 'react';
interface PathFindingContextInterface{
       algorithm:AlgorithmType;
       setAlgorithm:(algorithm: AlgorithmType)=>void;
       maze:MazeType;
       setMaze:(maze: MazeType)=>void;
       grid:GridType;
       setGrid:(Grid:GridType)=>void;
       isGraphVisualized:boolean;
       setGraphVisualized:(isGraphVisualized:boolean)=>void;
}

export const PathFindingContext=createContext<PathFindingContextInterface | undefined>(undefined);
export const PathFindingProvider=({children}:{children:ReactNode})=>{
       const [algorithm,setAlgorithm]=useState<AlgorithmType>("BFS");
       const [maze,setMaze]=useState<MazeType>("NONE");
       const [grid, setGrid] = useState<GridType>(
              createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
            );
       const [isGraphVisualized,setGraphVisualized]=useState<boolean>(false);
       return (
              <PathFindingContext.Provider
              value={{
                     algorithm,
                     setAlgorithm,
                     maze,
                     setMaze,
                     grid,
                     setGrid,
                     isGraphVisualized,
                     setGraphVisualized,
              }}
              >{children}</PathFindingContext.Provider>
       )
}
