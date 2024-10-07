import { store } from "../../store";
import { ALERT_ACTIONS } from "../../store/actions";
import { CONSTANTS } from "../../utils";


const internetConnectionHandler = (online) => {
    online && store.dispatch(ALERT_ACTIONS.clear())
    !online && store.dispatch(ALERT_ACTIONS.error('No internet connection', CONSTANTS.ERROR_TYPE.TOAST, false));
  return true
};

export default internetConnectionHandler;
