import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import Nav from "../AppNav/VerticalNavWrapper";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HeaderLogo from "../AppLogo";
import { setEnableMobileMenu } from "../../../store/reducers/themeoptions.reducer";

const AppSidebar = () => {
  const dispatch = useDispatch();

  const {
    enableSidebarShadow,
    enableMobileMenu,
    backgroundColor,
  } = useSelector((state) => ({
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    backgroundColor: state.ThemeOptions.backgroundColor,
    backgroundImage: state.ThemeOptions.backgroundImage,
    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
  }));

  const toggleMobileSidebar = () => {
    dispatch(setEnableMobileMenu(!enableMobileMenu));
  };

  return (
    <Fragment>
      {enableMobileMenu && (
        <div className="sidebar-mobile-overlay" onClick={toggleMobileSidebar} />
      )}
      <TransitionGroup>
        <CSSTransition
          in={enableMobileMenu}
          classNames="sidebar"
          timeout={300}
        >
          <div className={cx("app-sidebar", backgroundColor, {
            "sidebar-shadow": enableSidebarShadow,
          })}>
            <HeaderLogo />
              <div className="app-sidebar__inner">
                <Nav />
              </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default AppSidebar;
