import React from "react";

const Header = () => {
  return (
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <div className="logo-src"></div>
          <div className="header__pane ml-auto">
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="app-header__menu">
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </div>
      </div>
  );
};

export default Header;
