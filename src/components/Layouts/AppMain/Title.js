import React from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

const PageTitle = ({ heading, subheading }) => {
  const enablePageTitleSubheading = useSelector((state) => state.ThemeOptions.enablePageTitleSubheading);

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div>
            {heading}
            <div className={cx("page-title-subheading", {
                "d-none": !enablePageTitleSubheading,
              })}>
              {subheading}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
