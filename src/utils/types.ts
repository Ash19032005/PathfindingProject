export type AlgorithmType="DIJKSTRA" | "A_STAR" | "BFS" | "DFS";
export type MazeType="NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface MazeSelectType{
    name:string;
    value:MazeType;
}

export interface AlgorithmSelectType{
    name:string;
    value:AlgorithmType;
}
// In types.ts
export type TileType = {
       row: number;
       col: number;
       isEnd: boolean;
       isWall: boolean;
       isPath: boolean;
       distance: number;
       isStart: boolean;
       isTraversed: boolean;
       parent: any; // Can be a reference to another tile or null
   };
   
export type GridType = TileType[][];

export type SpeedType=2 | 1| 0.5;

export interface speedSelectType{
    name:string;
    value:SpeedType;
}
   