import React, { Fragment } from "react";

// DASHBOARDS
import AnalyticsDashboard from "./Analytics/";

// Layout
import AppHeader from "../../components/Layouts/AppHeader";
import AppSidebar from "../../components/Layouts/Sidebar";

const Dashboard = () => {
  return (
    <Fragment>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <AnalyticsDashboard/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
