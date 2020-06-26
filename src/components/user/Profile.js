import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import AppContext from "./context/AppContext";
import { updateProfile } from "./context/actions";
// import UserAPI from "./api/UserAPI";

const Profile = () => {
  let cuisine, location, profilePhoto, occupation, bio, favFood;

  // const [globalState, dispatch] = useContext(AppContext);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const profileData = {
      profilePhoto: profilePhoto.value,
      cuisine: cuisine.value,
      location: location.value,
      occupation: occupation.value,
      bio: bio.value,
      favoriteFood: favFood.value,
    };
    dispatch(updateProfile(profileData));
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
    <div className="col-sm-4">
      <div className="card profile col-sm-4" style={{ width: "18rem" }}>
        <img
          className="card-img-top photo"
          src={user.profile.profilePhoto}
          alt=""
        />
        <div className="card-body">
          <h1 className="card-title username">{user.name}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item cuisine">
              <FontAwesomeIcon icon="utensils" className="utensils" />
              {user.profile.cuisine}
            </li>
            <li className="list-group-item location">
              <FontAwesomeIcon icon="city" className="city" />
              {user.profile.location}
            </li>
            <li className="list-group-item occupation">
              <FontAwesomeIcon icon="briefcase" className="briefcase" />
              {user.profile.occupation}
            </li>
          </ul>
          <h5 className="card-title bio-title">Bio</h5>
          <button
            className="tooltip-test"
            title="Edit profile"
            data-toggle="modal"
            data-target="#editProfile"
          >
            <FontAwesomeIcon icon="user-edit" className="profile-edit" />
          </button>
          <p className="card-text bio">{user.profile.bio}</p>
          <h6 className="card-title food-title">Favorite foods</h6>
          <span>{user.profile.favoriteFood}</span>
        </div>
      </div>
      <div className="card mobile-profile" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={user.profile.profilePhoto}
            className="card-img-top photo"
            alt=""
          />
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
              {user.profile.cuisine}
            </li>
            <li className="list-group-item location">
              <FontAwesomeIcon icon="city" className="city" />
              {user.profile.location}
            </li>
            <li className="list-group-item occupation">
              <FontAwesomeIcon icon="briefcase" className="briefcase" />
              {user.profile.occupation}
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
          <p className="card-text bio">{user.profile.bio}</p>
          <h6 className="card-title food-title">Favorite foods</h6>
          <span>{user.profile.favoriteFood}</span>
        </div>
      </div>
      <div
        className="modal fade"
        id="editProfile"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editProfileLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Your Profile
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="container">
              <div className="registration-form-item form-group">
                <label className="first-label">Profile Photo</label>
                <input
                  ref={(elem) => (profilePhoto = elem)}
                  type="text"
                  className="form-control"
                  id="edit-profile-photo"
                  defaultValue={user.profile.profilePhoto}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Cuisine</label>
                <input
                  ref={(elem) => (cuisine = elem)}
                  type="text"
                  className="form-control"
                  id="cuisine"
                  defaultValue={user.profile.cuisine}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Location</label>
                <input
                  ref={(elem) => (location = elem)}
                  type="text"
                  className="form-control"
                  id="location"
                  defaultValue={user.profile.location}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Occupation</label>
                <input
                  ref={(elem) => (occupation = elem)}
                  type="text"
                  className="form-control"
                  id="occupation"
                  defaultValue={user.profile.occupation}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Bio</label>
                <input
                  ref={(elem) => (bio = elem)}
                  type="text"
                  className="form-control"
                  id="bio"
                  defaultValue={user.profile.bio}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Favorite Food</label>
                <input
                  ref={(elem) => (favFood = elem)}
                  type="text"
                  className="form-control"
                  id="fav-food"
                  defaultValue={user.profile.favoriteFood}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-danger"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
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
