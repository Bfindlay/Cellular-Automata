import { 
    RETRIEVE_CELLS,
    SET_CELLS,
    SET_CELL_COLOR
} from './types';


export const retrieveCells = () => {
    return { type: RETRIEVE_CELLS, payload: []}
}

export const setCells = cells => {
    return { type: SET_CELLS, payload: cells}
}

export const setCellColor = (geo, color) => {
    return { type: SET_CELL_COLOR, payload: {geo, color}}
}