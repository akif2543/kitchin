import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { signIn, clearUser } from "../../context/actions";
import Navbar from "./navbar";

const NavbarContainer = ({ links }) => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const errors = useSelector((store) => store.errors);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    match: false,
    presence: false,
  });

  const handleChange = (e, type) => {
    setState({ ...state, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({ match: false, presence: false });

    if (state.email.length && state.password.length) {
      dispatch(signIn(state));

      // const res = await UserAPI.login(state);

      // if (res.token) {
      //   sessionStorage.setItem("jwt", res.token);

      //   const profile = await UserAPI.getProfile(res.id);
      //   const name = res.userName;
      //   // profile.handle = res.handle;

      //   dispatch({ type: SIGN_IN, name, profile });
      // } else {
      //   setError({ ...error, presence: false, match: true });
      // }
    } else {
      setError({ ...error, match: false, presence: true });
    }
  };

  const handleClick = () => {
    sessionStorage.clear();
    dispatch(clearUser());
    window.location.href = "/";
  };

  // const resetPosts = () => {
  //   setGlobalState({ ...globalState, postsLoaded: false });
  // };

  // const editAccount = () => {
  //   setState({ ...state, accountUpdated: false });
  //   UserAPI.getInfo(globalState.user.id)
  //     .then((json) => {
  //       editFirstName.defaultValue = json.firstName;
  //       editLastName.defaultValue = json.lastName;
  //       editEmail.defaultValue = json.email;
  //     })
  //     .catch((e) => console.log("error", e));
  // };

  // const updateAccount = () => {
  //   const userData = {
  //     firstName: editFirstName.value,
  //     lastName: editLastName.value,
  //     email: editEmail.value,
  //     password: editPassword.value,
  //   };
  //   UserAPI.updateInfo(globalState.user.id, userData)
  //     .then((json) => {
  //       globalState.user.name = json.userName;
  //       setState({ ...state, accountUpdated: true });
  //       sessionStorage.setItem("username", globalState.user.name);
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // };

  return (
    <Navbar
      links={links}
      email={state.email}
      password={state.password}
      error={error}
      handleChange={handleChange}
      handleSignIn={handleSubmit}
      handleSignOut={handleClick}
      user={user}
      // resetPosts={resetPosts}
    />
  );
};

export default NavbarContainer;

// UserAPI.login(userData).then((json) => {
//         if (json.token) {
//           setGlobalState({ ...globalState, signedIn: true });
//           sessionStorage.setItem("jwt", json.token);
//           sessionStorage.setItem("userid", json.id);
//           sessionStorage.setItem("username", json.userName);
//           UserAPI.getProfile(json.id)
//             .then((json) => {
//               globalState.user.profile = json;
//               globalState.profileLoaded = true;
//               sessionStorage.setItem("profilePhoto", json.profilePhoto);
//               window.location.href = "/home";
//             })
//             .catch((e) => console.log("error", e));
//         } else {
//           setError({ ...error, presence: false, match: true });
