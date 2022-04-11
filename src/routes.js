/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Husnain Arshad",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Multi- Currency",
    icon: "nc-icon nc-money-coins",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Complaints",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "User Managment",
    icon: "nc-icon nc-settings-tool-66",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Tracking",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  
  {
    path: "/notifications",
    name: "Manage Vehicle",
    icon: "nc-icon nc-bus-front-12",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
