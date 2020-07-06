import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentUser } from "../../reducers/selectors/selectors";
import EditProfile from "./edit_profile";

const Profile = () => {
  const user = useSelector((store) => getCurrentUser(store));
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // const profileData = {
    //   profilePhoto: profilePhoto.value,
    //   cuisine: cuisine.value,
    //   location: location.value,
    //   occupation: occupation.value,
    //   bio: bio.value,
    //   favoriteFood: favFood.value,
    // };
    // dispatch(updateProfile(profileData));
    // UserAPI.updateProfile(globalState.user.id, profileData)
    //   .then((profile) => {
    //     // globalState.user.profile = json;
    //     dispatch({ type: UPDATE_PROFILE, profile });
    //     // globalState.profileLoaded = false;
    //     sessionStorage.setItem("profilePhoto", profile.profilePhoto);
    //     window.location.reload();
    //   })
    //   .catch((e) => console.log("error", e));
  };

  // useEffect(() => {
  //   if (!globalState.profileLoaded) {
  //     UserAPI.getProfile(globalState.user.id)
  //       .then((json) => {
  //         globalState.user.profile = json;
  //       })
  //       .catch((e) => console.log("error", e));
  //   }
  //   return () => {
  //     setGlobalState({ ...globalState, profileLoaded: true });
  //   };
  // }, [globalState.profileLoaded]);

  return (
    <div className="container col-sm-3 col-sm4">
      <div className="card profile col-sm-4" style={{ width: "18rem" }}>
        <img className="card-img-top photo" src={user.avatar} alt="" />
        <div className="card-body">
          <h1 className="card-title username">{user.name}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item cuisine">
              <FontAwesomeIcon icon="utensils" className="utensils" />
              {user.cuisine}
            </li>
            <li className="list-group-item location">
              <FontAwesomeIcon icon="city" className="city" />
              {user.location}
            </li>
            <li className="list-group-item occupation">
              <FontAwesomeIcon icon="briefcase" className="briefcase" />
              {user.occupation}
            </li>
          </ul>
          <h5 className="card-title bio-title">Bio</h5>
          <button
            className="profile-edit"
            title="Edit profile"
            data-toggle="modal"
            data-target="#editProfile"
          >
            <FontAwesomeIcon icon="user-edit" />
          </button>
          <p className="card-text bio">{user.bio}</p>
          <h6 className="card-title food-title">Favorite foods</h6>
          <span>{user.favoriteFood}</span>
        </div>
      </div>
      <EditProfile u={user} />
      <div className="card mobile-profile" style={{ width: "18rem" }}>
        <div className="card-body">
          <img src={user.avatar} className="card-img-top photo" alt="" />
          <h2 className="card-title">{user.name}</h2>
          <button
            className="mobile-profile-btn"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <FontAwesomeIcon icon="user" className="mobile-profile-icon" />
            View Profile
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <ul className="list-group list-group-flush">
            <li className="list-group-item cuisine">
              <FontAwesomeIcon icon="utensils" className="utensils" />
              {user.cuisine}
            </li>
            <li className="list-group-item location">
              <FontAwesomeIcon icon="city" className="city" />
              {user.location}
            </li>
            <li className="list-group-item occupation">
              <FontAwesomeIcon icon="briefcase" className="briefcase" />
              {user.occupation}
            </li>
          </ul>
          <h5 className="card-title bio-title">Bio</h5>
          <button
            className="mobile-profile-btn tooltip-test"
            data-toggle="modal"
            data-target="#editProfile"
            title="Edit profile"
          >
            <FontAwesomeIcon icon="user-edit" className="profile-edit" />
          </button>
          <p className="card-text bio">{user.bio}</p>
          <h6 className="card-title food-title">Favorite foods</h6>
          <span>{user.favoriteFood}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className="card-body">
          <h3>
            <FontAwesomeIcon icon={faUsers} />
             Followers
          </h3>
          <button type="button" className="btn btn-success">
            Follow
          </button>
          <button type="button" className="btn btn-primary">
            Message
          </button>
        </div> */
}
