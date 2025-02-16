import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants.ts";
import { TileType } from "../utils/types.ts";
import * as React from 'react';
import { ReactNode } from "react";
interface TileContextInterface{
       startTile:TileType;
       setStartTile:(startTile:TileType)=>void;
       endTile:TileType;
       setEndTile:(endTile:TileType)=>void;
}
export const TileContext= React.createContext<TileContextInterface | undefined>(undefined);
export const TileProvider=({children}:{children:ReactNode})=>{
       const [startTile,setStartTile]=React.useState<TileType>(START_TILE_CONFIGURATION);
       const [endTile,setEndTile]=React.useState<TileType>(END_TILE_CONFIGURATION);
       return (
              <TileContext.Provider
                     value={{startTile,
                            setStartTile,
                            endTile,
                            setEndTile}}>
                                   {children}
              </TileContext.Provider>
       )
}