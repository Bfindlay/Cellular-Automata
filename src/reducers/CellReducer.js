import { 
  RETRIEVE_CELLS,
  SET_CELLS,
  SET_CELL_COLOR,
  EVOLVE_CELLS
} from '../actions/types';

const INITIAL_STATE = { 
   cells: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RETRIEVE_CELLS:
            return {...state, user: action.payload}
        case SET_CELLS:
            return {...state, cells: action.payload}
        case EVOLVE_CELLS:
            return {...state, cells: action.payload}
        case SET_CELL_COLOR:
            let node = state.cells[action.payload.geo.x][action.payload.geo.y]
            let cells = [...state.cells];
            cells[action.payload.geo.x][action.payload.geo.y] = node;
            node.setColor(action.payload.color);
            return { ...state, cells}
        default:
            return state;
    }
}