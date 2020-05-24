import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./Footer";
import App from "./App";
import Home from "./Home";
import About from "./About";
import "./icons/fontawesome";
import "./App.css";
import { fetchUser } from "./context/actions";

const links = [
  {
    label: "Home",
    path: "./Home",
  },
  {
    label: "About",
    path: "./About",
  },
];

const LayoutRoute = ({ path, component, exact }) => {
  return (
    <div>
      <NavbarContainer links={links} />
      <Route path={path} exact={exact} component={component} />
      <Footer links={links} />
    </div>
  );
};

// const PrivateRoute = ({ component: Component, ...restOfProps }) => {
//   const [globalState] = useContext(AppContext);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         globalState.signedIn ? (
//           <LayoutRoute component={<Component {...props} />} />
//         ) : (
//           <Redirect to={"/"} />
//         )
//       }
//     />
//   );
// };

// const initialState = {
//   user: {},
//   feed: { loading: false, timestamp: null, posts: {} },
// };

const Main = () => {
  // const [globalState, dispatch] = useReducer(rootReducer, initialState);

  // console.log(globalState);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    // const getUser = async (token) => {
    //   const name = await UserAPI.getUser(token);

    //   if (name) {
    //     const profile = await UserAPI.getUserProfile(token);
    //     console.log(profile);
    //     dispatch({ type: SIGN_IN, name, profile });
    //   }
    // };

    if (token) dispatch(fetchUser());
  }, []);

  // const [globalState, setGlobalState] = useState({
  //   user: {
  //     name: sessionStorage.getItem("username")
  //       ? sessionStorage.getItem("username")
  //       : null,
  //     id: sessionStorage.getItem("userid")
  //       ? sessionStorage.getItem("userid")
  //       : null,
  //     profile: {},
  //   },
  //   signedIn: sessionStorage.getItem("jwt") ? true : false,
  //   profileLoaded: false,
  //   postsLoaded: false,
  // });

  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact component={App} />
        <LayoutRoute path="/home" exact component={Home} />
        <LayoutRoute path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
