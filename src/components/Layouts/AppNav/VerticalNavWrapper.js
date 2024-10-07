import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../../store/reducers/themeoptions.reducer";
import {
  MainNav,
  ComponentsNav,
} from "./NavItems";

const Nav = () => {
  const dispatch = useDispatch();

  const enableMobileMenu = useSelector(state => state.ThemeOptions.enableMobileMenu);

  const toggleMobileSidebar = (item) => {
    dispatch(setEnableMobileMenu(!enableMobileMenu)); // Toggle the mobile menu
    console.log("Selected Item:", item); // Log the selected item for debugging
  };

  return (
    <Fragment>
      <h5 className="app-sidebar__heading">Menu</h5>
      <MetisMenu 
        content={MainNav} 
        onSelected={toggleMobileSidebar} 
        activeLinkFromLocation
        className="vertical-nav-menu" 
        iconNamePrefix="" 
        classNameStateIcon="pe-7s-angle-down"
      />

      <h5 className="app-sidebar__heading">Energy App</h5>
      <MetisMenu 
        content={ComponentsNav} 
        onSelected={toggleMobileSidebar} 
        activeLinkFromLocation
        className="vertical-nav-menu" 
        iconNamePrefix="" 
        classNameStateIcon="pe-7s-angle-down"
      />
    </Fragment>
  );
};

export default Nav;
