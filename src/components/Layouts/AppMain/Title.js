import React, { useState } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
import { toast, Slide } from "react-toastify";

const PageTitle = ({ heading, icon, subheading }) => {
  const [expZoomIn, setExpZoomIn] = useState(false);

  // Use useSelector to access Redux state
  const enablePageTitleIcon = useSelector((state) => state.ThemeOptions.enablePageTitleIcon);
  const enablePageTitleSubheading = useSelector((state) => state.ThemeOptions.enablePageTitleSubheading);

  const notify = () => {
    toast("You can add whatever element in this section.", {
      transition: Slide,
      closeButton: true,
      autoClose: 5000,
      position: "bottom-center",
      type: "default",
    });
  };

  const toggle = (name) => {
    if (name === "expZoomIn") {
      setExpZoomIn((prev) => !prev);
    }
  };

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
