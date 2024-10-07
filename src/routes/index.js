import {
  Visualize,
  Dashboard
} from "../containers";
import { ROUTE_CONSTANTS } from "../utils";

const ROUTES = [
  {
    path: ROUTE_CONSTANTS["VISUALIZE"],
    exact: true,
    component: Visualize,
    view: "Base",
  },
  {
    path: ROUTE_CONSTANTS["DASHBOARD"],
    exact: true,
    component: Dashboard,
    view: "Dashboard",
  },
  {
    path: ROUTE_CONSTANTS["ANY"],
    exact: false,
    component: Visualize,
    view: "*",
  },
];
export default ROUTES;
