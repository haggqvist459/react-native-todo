import { ACTIONS } from '../../utils/constants';
import { VISIBILITY_FILTERS } from '../../utils/constants';

const initialState = VISIBILITY_FILTERS.ALL;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;