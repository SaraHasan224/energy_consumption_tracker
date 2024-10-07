import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../components/Layouts/AppMain/PageTitle";


export default class AnalyticsDashboard extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Dashboard"
                subheading="This is an example dashboard created using build-in elements and components for an interview task."
                icon="pe-7s-car icon-gradient bg-mean-fruit" />
            </div>
          </CSSTransition>

          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <h3>Scenario</h3> 
              <p>
              We have a solution that gives homeowners a detailed historical overview for energy usage, room temperatures and more for their homes.
              This solution consists of a driver that runs on the home controller to collect data from various systems, and a React application to visualise that data in a variety of graphs.
              An improvement to this solution has been proposed, which includes a requirement to show 2 types of data or a single graph, by using multiple Y-axis scales.
              </p>
              <h3>Task</h3>
              <p>Your task is to create a React application that demonstrates how a line graph and a bar chart can be visualized on a single graph (see example below):</p>

              <p>A JSON file with the data used for the above example can be found alongside this document.</p>
              <p>
              The line graph is showing temperature, in degrees C. The data for temperature is sparse, meaning that each datapoint is an indeterminate amount of time from the last entry. <br/>
              The bar chart is showing energy consumption, in kWh. Each bar represents the total energy used in 1 hour.<br/>
              The x-axis represents the time of day, in minutes, from midnight to midnight. For example: a value of 810 represents 1:30pm.<br/>
              You have the freedom to use whichever libraries you wish when creating this demo.
              </p>

            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}