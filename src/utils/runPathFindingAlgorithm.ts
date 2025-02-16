import { bfs } from "../lib/algorithms/pathfinding/bfs.ts";
import { dfs } from "../lib/algorithms/pathfinding/dfs.ts";
import { dijkstra } from "../lib/algorithms/pathfinding/dijkstra.ts";
import { AlgorithmType } from "./types.ts"
import { GridType } from "./types.ts"
import { TileType } from "./types.ts";
export const runPathFindingAlgorithm=({
       algorithm,
       grid,
       startTile,
       endTile,

}:{
       algorithm:AlgorithmType;
       grid:GridType;
       startTile:TileType;
       endTile:TileType;

})=>{
       switch(algorithm){
              case "BFS":
               return bfs(grid,startTile,endTile);
              case "DFS":
                     return dfs(grid,startTile,endTile);
              case "DIJKSTRA":
                     return dijkstra(grid,startTile,endTile)
              default:
                  return bfs(grid,startTile,endTile);

       }
}