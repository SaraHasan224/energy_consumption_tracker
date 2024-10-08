import React from "react";
import { useSelector } from "react-redux";

import { HELPER, CONSTANTS } from "../../utils";


const useCustomAlerts = () => {
  const { message, type, group } = useSelector(state => state.alert);
  

  if(!HELPER.isEmpty(message) && !HELPER.isEmpty(type)){
      const clearAlert = () => {
        // dispatch(alertActions.clear())
      };
      return (
        (
        group === CONSTANTS.ERROR_TYPE.ALERT
      ) ?
        <div className="row">
        <div className={`col-12 alert_classes `}>
            <div className={`alertCustom  ${HELPER.isEmpty(type) ? "default" : type}`} role="alert">
              <div className={`alertAction ${HELPER.isEmpty(type) ? "default" : type}`}>
                  < span className={`${type === "error" ? "icomoon-close" :
                    type === "warning" ?
                    "icomoon-info" : "icomoon-check"}`}
                    onClick={clearAlert}></span>
              </div>
              <div className="alertMsg">{message}</div>
            </div>
          </div>
        </div>
      : <></>)
    }
  return(<></>);
};

export default useCustomAlerts;
