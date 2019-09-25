export function cellShouldLive(row, cell, grid) {

    const rows = grid.length;
    const cols = grid[0].length;

    const pastFirstRow = () => row > 0;
    const pastFirstCol = () => cell > 0;
    const beforeLastRow = () => row < rows - 1;
    const beforeLastCol = () => cell < cols - 1;

    const top = () => grid[row - 1][cell]; //cell above
    const topRight = () => grid[row - 1][cell + 1] //cell TopRight
    const right = () => grid[row][cell + 1] // cell right
    const bottomRight = () => grid[row + 1][cell + 1] //cell BottmRight
    const bottom = () => grid[row + 1][cell] //cell bottom
    const bottomLeft = () => grid[row + 1][cell - 1] //cell BottmRight
    const left = () => grid[row][cell - 1] //cell left
    const topLeft = () => grid[row - 1][cell - 1] //cell TopLeft

    const currentCell = () => grid[row][cell];

    let count = 0; // neighbour count

    if(pastFirstRow() && top()){
        count++;
    }

    if(pastFirstRow() && beforeLastCol() && topRight()){
        count++;
    }

    if(beforeLastCol() && right()){
        count++;
    }

    if(beforeLastCol() && beforeLastRow() && bottomRight()){
        count++;
    }

    if(beforeLastRow() && bottom()){
        count++;
    }

    if(pastFirstCol() && beforeLastRow() && bottomLeft()){
        count++;
    }

    if(pastFirstCol() && left()){
        count++;
    }

    if(pastFirstCol() && pastFirstRow() && topLeft()){
        count++;
    }

    let cellState = currentCell();

    if(currentCell() && (count < 2 || count > 3)){  //a cell dies if it has less than 2 or more than 3 neighbours
        cellState = false;
    }

    if(!currentCell() && (count === 3)){ //a cell is born if it has exactly 3 neighbours
        cellState = true;
    }

    return cellState;
}
