import React from "react"
import { Select } from "./Select.tsx"
import { usePathFinding } from "../hooks/usePathFinding.tsx";
import {useTile} from '../hooks/useTile.tsx';
import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALGORITHMS, SLEEP_TIME,SPEEDS } from "../utils/constants.ts";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { resetGrid } from "../utils/resetGrid.ts";
import { useState } from "react";
import {useSpeed} from '../hooks/useSpeed.tsx'
import { PlayButton } from "./PlayButton.tsx";
import { runMazeAlgorithm } from "../utils/runMazeAlgortihm.ts";
import { runPathFindingAlgorithm } from "../utils/runPathFindingAlgorithm.ts";
import { RefObject } from "react";
import { animatePath } from "../utils/animatePath.ts";
export function Nav({isVisualizationRunningRef}:{isVisualizationRunningRef:RefObject<boolean>}){
       const [isDisabled,setIsDisabled]=useState(false);
       const {maze,setMaze,grid,setGrid,isGraphVisualized,setGraphVisualized,algorithm,setAlgorithm}=usePathFinding();
       const {startTile,endTile}=useTile();
       const {speed,setSpeed}=useSpeed();
       const handleGenerateMaze=(maze:MazeType)=>{
              if(maze==="NONE"){
                     resetGrid({grid,startTile,endTile});
              }
              setMaze(maze);
              setIsDisabled(true);
              runMazeAlgorithm({
                     maze,
                     grid,
                     startTile,
                     endTile,
                     setIsDisabled,
                     speed,
              })
              const newGrid=grid.slice();
              setGrid(newGrid)
              setGraphVisualized(false);
       }
       const handlerRunVisualiser=()=>{
              if(isGraphVisualized){
                     setGraphVisualized(false);
                     resetGrid({grid,startTile,endTile});
                     return 
              }
              const{traversedTiles,path}=runPathFindingAlgorithm(
                     {algorithm,
                     grid,
                     startTile,
                     endTile}
              )
              console.log("traversed tiles",traversedTiles);
              console.log("path",path);
       animatePath(traversedTiles,path,startTile,endTile,speed);
       setIsDisabled(true); // keep the user not to interact with the grid
       isVisualizationRunningRef.current=true;
       setTimeout(()=>{
              const newGrid=grid.slice();
              setGrid(newGrid);
              setGraphVisualized(true);
              setIsDisabled(false);
              isVisualizationRunningRef.current=false;
       },(SLEEP_TIME*(traversedTiles.length+SLEEP_TIME*2)+EXTENDED_SLEEP_TIME*(path.length+60)*SPEEDS.find((s)=>s.value===speed)!.value))
       }
       return(
              <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-500 sm:px-5 px-0">
                     <div className="flex flex-col md:mt-5 mb-5 lg:flex-row items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                            <h1 className="text-white md:mb-2 lg:flex w-[40%] text-2xl pl-1">
                                   PATHFINDING VISUALIZER
                            </h1>
                            <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-2 sm:py-0 py-4 sm:space-x-4">
                                   <Select
                                      label="Maze"
                                      value={maze}
                                      options={MAZES}
                                      onChange={(e)=>{
                                          handleGenerateMaze(e.target.value as MazeType);
                                      }}
                                   />
                                   <Select
                                          label="Graph"
                                          value={algorithm}
                                          options={PATHFINDING_ALGORITHMS}
                                          onChange={(e)=>{
                                                 setAlgorithm(e.target.value as AlgorithmType)
                                          }}
                                   />
                                   <Select 
                                          label="Speed"
                                          value={speed}
                                          options={SPEEDS}
                                          onChange={(e)=>{
                                                 setSpeed(parseInt(e.target.value) as SpeedType)
                                          }}
                                   />
                                   <PlayButton
                                   isDisabled={isDisabled}
                                   isGraphVisualized={isGraphVisualized}
                                   handlerRunVisualizer={handlerRunVisualiser}
                                   />
                            </div>
                     </div>
              </div>
       )
}