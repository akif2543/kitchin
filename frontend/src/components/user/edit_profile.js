import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/session_actions";

const EditProfile = ({ u }) => {
  const dispatch = useDispatch();

  const [p, setP] = useState({
    avatar: "",
    cuisine: "",
    location: "",
    occupation: "",
    bio: "",
    favoriteFood: "",
  });
  const [localErrors, setLocalErrors] = useState([]);

  useEffect(() => {
    if (u !== undefined)
      setP({
        avatar: u.avatar,
        cuisine: u.cuisine,
        location: u.location,
        occupation: u.occupation,
        bio: u.bio,
        favoriteFood: u.favoriteFood,
      });
  }, [u]);

  const handleChange = (type) => (e) => setP({ ...p, [type]: e.target.value });

  const formIsValid = () => {
    const err = [];

    if (!p.avatar.trim().length) err.push("profile photo is required");
    if (!p.location.trim().length) err.push("location is required");

    setLocalErrors(err);
    return !Boolean(err.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValid()) {
      setLocalErrors([]);
      dispatch(updateProfile(p)).then((action) => {
        if (action.type === "RECEIVE_CURRENT_USER") {
          document.getElementsByClassName("close-edit")[0].click();
        }
      });
    }
  };

  return (
    <div
      className="modal fade"
      id="editProfile"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
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
                  type="text"
                  className="form-control"
                  id="edit-profile-photo"
                  value={p.avatar}
                  onChange={handleChange("avatar")}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Cuisine</label>
                <input
                  type="text"
                  className="form-control"
                  id="cuisine"
                  value={p.cuisine}
                  onChange={handleChange("cuisine")}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={p.location}
                  onChange={handleChange("location")}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  id="occupation"
                  value={p.occupation}
                  onChange={handleChange("occupation")}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Bio</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="bio"
                  value={p.bio}
                  onChange={handleChange("bio")}
                />
              </div>
              <div className="registration-form-item form-group">
                <label>Favorite Food</label>
                <input
                  type="text"
                  className="form-control"
                  id="fav-food"
                  value={p.favoriteFood}
                  onChange={handleChange("favoriteFood")}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary close-edit"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-danger">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
