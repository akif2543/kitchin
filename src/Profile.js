import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import AppContext from "./AppContext";

const Profile = () => {
  
  let cuisine, location, profilePhoto, occupation, bio, favFood;

  const [globalState, setGlobalState] = useContext(AppContext);
  
  const [state, setState] = useState({
      editProfile: false,
  });

  const updateProfile = () => {
    fetch("http://localhost:3001/user/profile/update", {
      method: "POST",
      body: JSON.stringify({
        userId: globalState.user.id,
        profilePhoto: profilePhoto.value,
        cuisine: cuisine.value,
        location: location.value,
        occupation: occupation.value,
        bio: bio.value,
        favoriteFood: favFood.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        globalState.user.profile = json;
        globalState.profileLoaded = false;
        sessionStorage.setItem('profilePhoto', json.profilePhoto);
        window.location.reload();
  })};

  if (!globalState.profileLoaded) {
    fetch("http://localhost:3001/user/profile/view", {
      method: "POST",
      body: JSON.stringify({
        userId: globalState.user.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        globalState.user.profile = json;
        globalState.profileLoaded = true;
      })
      .catch(e => console.log("error", e));
  };

  return (
    <div>
      <div className="card profile" style={{ width: "18rem" }}>
        <img className="card-img-top photo" src={globalState.user.profile.profilePhoto} />
        <div className="card-body">
          <h1 className="card-title username">{globalState.user.name}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item cuisine">
              <FontAwesomeIcon icon={faUtensils} id="utensils" />
              {globalState.user.profile.cuisine}
            </li>
            <li className="list-group-item location">
              <FontAwesomeIcon icon={faCity} id="city" />
              {globalState.user.profile.location}
            </li>
            <li className="list-group-item occupation">
              <FontAwesomeIcon icon={faBriefcase} id="city" id="briefcase" />
              {globalState.user.profile.occupation}
            </li>
          </ul>
          <h5 className="card-title bio-title">Bio</h5>
          <button data-toggle="modal" data-target="#editProfile">
            <FontAwesomeIcon icon={faUserEdit} id="edit" />
          </button>
          <p className="card-text bio">
            {globalState.user.profile.bio}
          </p>
          <h6 className="card-title food-title">Favorite foods:</h6>
          <span>{globalState.user.profile.favoriteFood}</span>
        </div>
        <div className="modal fade" id="editProfile" tabindex="-1" role="dialog" aria-labelledby="editProfileLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Your Profile</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="container">
              <div className="registration-form-item form-group">
                  <label>Profile Photo</label>
                  <input
                    ref={elem => (profilePhoto = elem)}
                    type="text"
                    className="form-control"
                    id="edit-profile-photo"
                    defaultValue={globalState.user.profile.profilePhoto}
                  />
                </div>
                <div className="registration-form-item form-group">
                  <label>Cuisine</label>
                  <input
                    ref={elem => (cuisine = elem)}
                    type="text"
                    className="form-control"
                    id="cuisine"
                    defaultValue={globalState.user.profile.cuisine}
                  />
                </div>
                <div className="registration-form-item form-group">
                  <label>Location</label>
                  <input
                    ref={elem => (location = elem)}
                    type="text"
                    className="form-control"
                    id="location"
                    defaultValue={globalState.user.profile.location}
                  />
                </div>
                <div className="registration-form-item form-group">
                  <label>Occupation</label>
                  <input
                    ref={elem => (occupation = elem)}
                    type="text"
                    className="form-control"
                    id="occupation"
                    defaultValue={globalState.user.profile.occupation}
                  />
                </div>
                <div className="registration-form-item form-group">
                  <label>Bio</label>
                  <input
                    ref={elem => (bio = elem)}
                    type="text"
                    className="form-control"
                    id="bio"
                    defaultValue={globalState.user.profile.bio}
                  />
                </div>
                <div className="registration-form-item form-group">
                  <label>Favorite Food</label>
                  <input
                    ref={elem => (favFood = elem)}
                    type="text"
                    className="form-control"
                    id="fav-food"
                    defaultValue={globalState.user.profile.favoriteFood}
                  />
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick={updateProfile} type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
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
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
