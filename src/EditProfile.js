import React, { useState, useContext } from "react";
import AppContext from "./AppContext";

const EditProfile = () => {

  let cuisine, location, profilePhoto, occupation, bio, favFood;

  const [globalState, setGlobalState] = useContext(AppContext);

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

  return (
    <div className="registration-form container" id="edit-profile">
      <h3>Edit Your Profile</h3>
      <div className="registration-flex container">
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
          <button
            onClick={updateProfile}
            type="submit"
            className="btn btn-primary"
          >
            Update
          </button>
      </div>
    </div>
  );
};

export default EditProfile;
