import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// const links = [
//   {
//     label: "Home",
//     path: "./Home",
//   },
//   {
//     label: "About",
//     path: "./About",
//   },
// ];

// const LayoutRoute = ({ path, render, exact }) => {
//   return (
//     <div>
//       <Navbar links={links} />
//       <Route path={path} exact={exact} render={render} />
//       <Footer links={links} />
//     </div>
//   );
// };

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/feed" />
    }
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id),
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
