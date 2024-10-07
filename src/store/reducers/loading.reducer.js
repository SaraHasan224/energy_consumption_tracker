import {
  FORM_CONSTANTS,
} from "../actionTypes";

const initState = {
  showPageLoader: false,
};


const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case FORM_CONSTANTS.SHOW_LOADER:
      return {
        ...state,
        showPageLoader: true,
      };
    case FORM_CONSTANTS.HIDE_LOADER:
      return {
        ...state,
        showPageLoader: false,
      };
    default:
      return state;
  }
};
export default loadingReducer;
