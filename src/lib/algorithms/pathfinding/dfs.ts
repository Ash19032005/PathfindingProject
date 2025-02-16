import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors.ts";
import { isEqual } from "../../../utils/helpers.ts";
import { GridType, TileType } from "../../../utils/types.ts";

export const dfsRecursive = (grid: GridType, currentTile: TileType, endTile: TileType, traversedTiles = []) => {
  if (!currentTile || currentTile.isWall || currentTile.isTraversed) return false; // Base case
  
  currentTile.isTraversed = true;
  traversedTiles.push(currentTile);
  
  if (isEqual(currentTile, endTile)) return true; // Found the end tile
  
  const neighbors = getUntraversedNeighbors(grid, currentTile);
  
  for (const neighbor of neighbors) {
    if (!neighbor.isTraversed) {
      neighbor.distance = currentTile.distance + 1;
      neighbor.parent = currentTile;
      if (dfsRecursive(grid, neighbor, endTile, traversedTiles)) {
        return true;
      }
    }
  }
  return false;
};

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  dfsRecursive(grid, base, endTile, traversedTiles);

  const path = [];
  let current = grid[endTile.row][endTile.col];
  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent!;
  }
  
  return { traversedTiles, path };
};
