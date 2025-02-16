import { GridType, TileType } from "../utils/types.ts";
import { MAX_COLS, MAX_ROWS } from "../utils/constants.ts";

// const createRow = (row: number, startTile: TileType, endTile: TileType) => {
//     const currentRow= [];
//     for (let col = 0; col < MAX_COLS; col++) {
//         currentRow.push({
//             row,
//             col,
//             isEnd: ((row === endTile.row) && (col === endTile.col)),
//             isWall: false,
//             isPath: false,
//             distance: Infinity,
//             isStart: ((row === startTile.row) && (col === startTile.col)),
//             isTraversed: false,
//             parent: null
//         });
//     }
//     return currentRow;
// }

const createRow = (row: number, startTile: TileType, endTile: TileType) => {

    const currentRow:TileType[] = [];
    for (let col = 0; col < MAX_COLS; col++) {
       
        let flag_1=false;
        if(row === startTile.row && col === startTile.col){
                flag_1=true;
               
        }
        let flag_2=false
        if(row === endTile.row && col === endTile.col){
            flag_2=true;
            

        }
        currentRow.push({
            row,
            col,
            isStart:flag_1,
            isEnd: flag_2,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isTraversed: false,
            parent: null,
        });
    }
    return currentRow;
};


export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType=[];
    for (let row = 0; row < MAX_ROWS; row++) {
        const res=createRow(row, startTile, endTile)
        grid.push(res);    
        }
    return grid; 
}

export const checkIfstartOrEnd=(row:number, col:number)=>{
        return ((row===1 && col===1) || (row===MAX_ROWS-2 && col===MAX_COLS-2));
}

export const createNewGrid = (grid: GridType, row: number, col: number) => {
    const newGrid = grid.slice();
    const newTile = {
      ...newGrid[row][col],
      isWall: !newGrid[row][col].isWall,
    };
    newGrid[row][col] = newTile;
    return newGrid;
  };


export const isEqual=(a:TileType,b:TileType)=>{
    return a.row===b.row && a.col===b.col;
}

export const isRowColEqual=(row:Number,col:Number,tile:TileType)=>{
    return row===tile.row && col===tile.col;
}

export const sleep=(ms:number)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms));


}
export const getRandInt=(min:number,max:number)=>{
    min=Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random()*(max-min)+min)
}