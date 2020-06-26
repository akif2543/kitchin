import axios from "axios";

const UserAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  },
  register: (user) => axios.post("/api/users/register", user),
  login: (user) => axios.post("/api/users/login", user),
  fetchUser: (handle) => axios.get(`/api/users/${handle}`),
  update: (user) => axios.put("/api/users", user),
  updateProfile: (profile) => axios.put("/api/users/profile", profile),
};

export default UserAPI;
