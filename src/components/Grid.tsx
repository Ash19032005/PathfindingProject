import {twMerge} from "tailwind-merge";
import {usePathFinding} from "../hooks/usePathFinding.tsx";
import React, { RefObject, useState } from "react";
import { MAX_COLS, MAX_ROWS } from "../utils/constants.ts";
import { Tile } from "./Tile.tsx";
import { checkIfstartOrEnd } from "../utils/helpers.ts";
import { createNewGrid } from "../utils/helpers.ts";
export const Grid=({isVisualizationRunningRef}:{isVisualizationRunningRef:RefObject<boolean>})=>{
       const {grid,setGrid}=usePathFinding();
       const [isMouseDown,setIsMouseDown]=useState(false);
       const handleMouseDown=(row:number, col:number)=>{
              if(isVisualizationRunningRef.current || checkIfstartOrEnd(row,col)){
                     return;
              }
              setIsMouseDown(true);
              const newGrid=createNewGrid(grid,row,col);
              setGrid(newGrid);
       }
       const handleMouseUp=(row:number, col:number)=>{
              if(isVisualizationRunningRef.current || checkIfstartOrEnd(row,col)){
                     return;
              }
              setIsMouseDown(false);
       }
       const handleMouseEnter=(row:number, col:number)=>{
              if(isVisualizationRunningRef.current || checkIfstartOrEnd(row,col)){
                     return;
              }
              if(isMouseDown){
                     const newGrid=createNewGrid(grid,row,col);
                     setGrid(newGrid);
              }  
       }
       return (
              <div
                  className={
                     twMerge(
                            // Base classes
                            "pt-10 -mt-5 flex items-center flex-col justify-center border-sky-300",
                            // control grid-height
                            `lg:min-h-[${MAX_ROWS*17}px] md:min-h-[${MAX_ROWS*15}px]
                            md:min-h-[${MAX_ROWS*12}px] md:min-h-[${MAX_ROWS*12}px]`,
                            // controlling grid width
                            `lg:w-[${MAX_COLS*17}px] md:w-[${MAX_COLS*15}px]
                            md:w-[${MAX_COLS*12}px] w-[${MAX_COLS*12}px]`)}
                            > 
                                 {grid.map((r,rowIndex)=>(
                            <div key={rowIndex} className="flex">
                                   {r.map((tile,tileIndex)=>
                                   {
                                          const {row,col,isEnd, isStart, isPath, isTraversed, isWall}=tile;
                                          return(
                                                 <Tile
                                                 key={tileIndex}
                                                 row={tile.row}
                                                 col={tile.col}
                                                 isEnd={isEnd}
                                                 isStart={isStart}
                                                 isPath={isPath}
                                                 isTraversed={isTraversed}
                                                 isWall={isWall}
                                                 handleMouseDown={()=>handleMouseDown(row,col)}
                                                 handleMouseUp={()=>handleMouseUp(row,col)}
                                                 handleMouseEnter={()=>handleMouseEnter(row,col)}
                                                 />
                                          );
})}
                            </div>
                     )

                     )}</div>          
       )}