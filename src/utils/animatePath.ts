import { PATH_TILE_STYLE, SLEEP_TIME, SPEEDS, TRAVERSED_TILE_STYLE } from "./constants.ts";
import { isEqual } from "./helpers.ts";
import { SpeedType, TileType } from "./types.ts"
export const animatePath=(
       traversedTiles:TileType[],
       startTile:TileType,
       path:TileType[],
       endTile:TileType,
       speed:SpeedType
)=>{
       for(let i=0;i<traversedTiles.length;i++){
              setTimeout(()=>{
                     const tile=traversedTiles[i];
                     // console.log("tiles",tile);
                     if((!(tile.row===1) || !(tile.col===1)) &&(!(tile.row===28) || !(tile.col===28)) ){
                            document.getElementById(`${tile.row}-${tile.col}`)!.className=`${TRAVERSED_TILE_STYLE} animate-traversed`;
                     }
                     // if(!isEqual(tile,startTile) && !isEqual(tile,endTile)){
                     //        document.getElementById(`${tile.row}-${tile.col}`)!.className=`${TRAVERSED_TILE_STYLE} animate-traversed`;
                     // }
              },SLEEP_TIME*i*SPEEDS.find((s)=>s.value===speed)!.value);
       }
       setTimeout(()=>{
              for(let i=0;i<path.length;i++){
                     setTimeout(()=>{
                            const tile=path[i];
                            if(!isEqual(tile,startTile)&& !(isEqual(tile,endTile))){
                                   document.getElementById(`${endTile}-${startTile}`)!.className=`${PATH_TILE_STYLE} animate-path`
                            }
                     })
              }
       },SLEEP_TIME*traversedTiles.length*SPEEDS.find((s)=>s.value===speed)!.value)
}