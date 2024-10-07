import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { LOCAL_STORAGE_SERVICE, HELPER, ROUTES } from "../../utils";
let allow;

const useBackActionHandler = () => {
  let location = useLocation();
  const handleBackNavigationSettings = () => {
    let firstScreen = LOCAL_STORAGE_SERVICE._isFirstScreen();

    let path = ROUTES.find(route => {
      return route.path === location?.pathname;
    });
    if (path !== -1 && path !== undefined) {
      allow = path?.allowBack && isNaN(firstScreen) ? false : !firstScreen;
    } else {
      allow = false;
    }
  }

  useEffect(() => {
    handleBackNavigationSettings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleBackNavigationSettings,
  }
};

export default useBackActionHandler;