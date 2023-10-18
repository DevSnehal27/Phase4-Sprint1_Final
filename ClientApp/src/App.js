import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import FormUserPage1 from "./components/pages/FormUser/FormUser1";
import PaletteDesignerPage from "./components/pages/FormUser/PaletteDesigner";

import HelpMamual from "./HelpMamual";



const App = ({ location, isAuthenticated }) => {

  return (
  
      <div>
       
        <Route
          location={location}
          path="/confirmation/:token"
          exact
          component={ConfirmationPage}
        />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
        <GuestRoute
          location={location}
          path="/signup"
          exact
          component={SignupPage}
        />
        <GuestRoute
          location={location}
          path="/forgot_password"
          exact
          component={ForgotPasswordPage}
        />
        <GuestRoute
          location={location}
          path="/reset_password/:token"
          exact
          component={ResetPasswordPage}
        />
        <UserRoute
          location={location}
          path="/"
          exact
          component={DashboardPage}
        />

        <UserRoute
          location={location}
          path="/profile1/:casename"
          exact
          component={FormUserPage1}
        />
        <UserRoute
          location={location}
          path="/palette/:palletid"
          exact
          component={PaletteDesignerPage}
        />
        {/* <UserRoute
        location={location}
        path="/help_manual"
        exact
        component={HelpMamual}
      /> */}
        {/* <UserRoute location={location} path="/" component={Posts} /> */}
      </div>

  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
