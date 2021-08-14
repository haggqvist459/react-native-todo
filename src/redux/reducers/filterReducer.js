import { ACTIONS } from '../../utils/constants';
import { VISIBILITY_FILTERS } from '../../utils/constants';

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
        switch (action) {
                case ACTIONS.SET_FILTER:
                        console.log("ACTIONS.SET_FILTER: ", action.payload.filter);
                        return action.payload.filter;
                default:
                        return state;
        }
}

export default visibilityFilter