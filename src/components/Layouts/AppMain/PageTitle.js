import React from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
import Title from "./Title";

const PageTitle = ({ heading, icon, subheading }) => {
  const enablePageTitleIcon = useSelector((state) => state.ThemeOptions.enablePageTitleIcon);
  const enablePageTitleSubheading = useSelector((state) => state.ThemeOptions.enablePageTitleSubheading);

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className={cx("page-title-icon", {
              "d-none": !enablePageTitleIcon,
            })}>
            <i className={icon} />
          </div>
          <div>
            {heading}
            <div className={cx("page-title-subheading", {
                "d-none": !enablePageTitleSubheading,
              })}>
              {subheading}
            </div>
          </div>
        </div>
        <div className="page-title-actions">{<Title />}</div>
      </div>
    </div>
  );
};

export default PageTitle;
