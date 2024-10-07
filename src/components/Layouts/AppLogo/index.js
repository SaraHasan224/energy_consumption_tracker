import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "react-burgers";

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
} from "../../../store/reducers/themeoptions.reducer";

const HeaderLogo = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const enableClosedSidebar = useSelector((state) => state.ThemeOptions.enableClosedSidebar);
  const enableMobileMenu = useSelector((state) => state.ThemeOptions.enableMobileMenu);
  
  // Toggle the closed sidebar state
  const toggleEnableClosedSidebar = () => {
    dispatch(setEnableClosedSidebar(!enableClosedSidebar)); // Dispatch action to toggle sidebar state
  };

  // Toggle the active state for the burger menu
  const toggleBurgerMenu = () => {
    setActive((prevActive) => !prevActive);
    dispatch(setEnableMobileMenu(!enableMobileMenu)); // Dispatch action to toggle mobile menu state
  };

  return (
    <Fragment>
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ms-auto">
          <div onClick={toggleEnableClosedSidebar}>
            <Slider 
              width={26} 
              lineHeight={2} 
              lineSpacing={5} 
              color="#6c757d"
              active={active} 
              onClick={toggleBurgerMenu} // Toggle burger menu on click
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
