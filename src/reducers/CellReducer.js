import { 
  RETRIEVE_CELLS,
  SET_CELLS,
  SET_CELL_COLOR
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
        case SET_CELL_COLOR:
            let node = state.cells[action.payload.x][action.payload.y]
            let cells = [...state.cells];
            cells[action.payload.x][action.payload.y] = node;
            node.setColor();
            console.log(node.color);
            return { ...state, cells}
        default:
            return state;
    }
}