/*!

=========================================================
* Now UI Kit PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/react-demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

// pages
import Index from "views/Index.js";
import ContactUs from "views/examples/ContactUs.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contact-me" render={(props) => <ContactUs {...props} />} />
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Redirect to="/profile-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
