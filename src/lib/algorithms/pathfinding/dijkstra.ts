import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors.ts";
import { isEqual } from "../../../utils/helpers.ts";
import { GridType, TileType } from "../../../utils/types.ts";
import { Heap } from "heap-js";

export const dijkstra = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const traversedTiles = []; // Store traversed tiles
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;

  // Min heap based on distance
  const minHeap = new Heap((a, b) => a.distance - b.distance);
  minHeap.push(base);

  while (!minHeap.isEmpty()) {
    const currentTile = minHeap.pop();
    if (!currentTile || currentTile.isWall) continue;
    if (currentTile.distance === Infinity) break;

    currentTile.isTraversed = true;
    traversedTiles.push(currentTile);

    if (isEqual(currentTile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, currentTile);
    for (const neighbor of neighbors) {
      const newDistance = currentTile.distance + 1;
      if (newDistance < neighbor.distance) {
        neighbor.distance = newDistance;
        neighbor.parent = currentTile;
        minHeap.push(neighbor);
      }
    }
  }

  const path = [];
  let current = grid[endTile.row][endTile.col];
  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent;
  }

  return { traversedTiles, path };
};
