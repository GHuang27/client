import { FETCH_CAMPUS } from "../actions/actionTypes";

const initialState = {
  students: [],
};

//Reducer;
const campus = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default campus;