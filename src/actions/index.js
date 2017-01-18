import { 
    RETRIEVE_CELLS,
    SET_CELLS,
    SET_CELL_COLOR,
    EVOLVE_CELLS
} from './types';


export const retrieveCells = () => {
    return { type: RETRIEVE_CELLS, payload: []};
}

export const evolveCells = (cells) => {

    let cellArr = [...cells];
    
    cellArr.forEach( cellRow => {
        //make array of neighbours for the cell
        cellRow.forEach( cell => {
            let neighbours = [];
            cell.neighbours.forEach ( n =>{
                if(cells[n.x]!== undefined && cells[n.y] !== undefined){
                    neighbours.push(cells[n.x][n.y]);
                }
                cell.evolve(neighbours);
                cell.setHealth(cell.health-=0.1)
            })
        }); 
    })
    return { type: EVOLVE_CELLS, payload: cellArr};
}
export const setCells = cells => {
    return { type: SET_CELLS, payload: cells};
}

export const setCellColor = (geo, color) => {
    return { type: SET_CELL_COLOR, payload: {geo, color}};
}