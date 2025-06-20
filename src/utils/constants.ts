import { AlgorithmSelectType, MazeSelectType, speedSelectType } from "./types.ts";

export const MAX_ROWS=30;
export const MAX_COLS=30;
export const START_TILE_CONFIGURATION={
       row:1,
       col:1,
       isStart:false,
       isEnd:false,
       isWall:false,
       isPath:false,
       distance:0,
       isTraversed:false,
       parent:null,
}

export const END_TILE_CONFIGURATION={
       row:MAX_ROWS-2,
       col:MAX_COLS-2,
       isStart:false,
       isEnd:false,
       isWall:false,
       isPath:false,
       distance:0,
       isTraversed:false,
       parent:null,
}

export const TILE_STYLE="lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE=TILE_STYLE+" bg-cyan-400"
export const START_TILE_STYLE=TILE_STYLE+" bg-yellow-400"
export const END_TILE_STYLE=TILE_STYLE+" bg-red-400"
export const WALL_TILE_STYLE=TILE_STYLE+" bg-gray-400"
export const PATH_TILE_STYLE=TILE_STYLE+" bg-green-400"

export const MAZES:MazeSelectType[]=[
       {name:"No Maze", value:"NONE"},
       {name:"Binary Tree", value:"BINARY_TREE"},
       {name:"Recursive Division", value:"RECURSIVE_DIVISION"}
]

export const SPEEDS:speedSelectType[]=[
       {name:"slow",value:2},
       {name:"medium",value:1},
       {name:"fast",value:0.5}
]

export const PATHFINDING_ALGORITHMS:AlgorithmSelectType[]=[
       {name:'dijkstra',value:'DIJKSTRA'},
       // {name:'A_star',value:'A_STAR'},
       {name:'Breadth First Search',value:'BFS'},
       {name:'Depth First Search',value:'DFS'}
]
export const SLEEP_TIME=8;
export const EXTENDED_SLEEP_TIME=30;