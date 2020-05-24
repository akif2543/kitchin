const UserAPI = {
  async register(body) {
    const res = await fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async login(body) {
    const res = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async getUser() {
    const res = await fetch("http://localhost:3001/users", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await res.json();
  },
  async getInfo(id, query) {
    const res = await fetch(
      `http://localhost:3001/users/${query ? `${id}?get=${query}` : id}`
    );
    return await res.json();
  },
  async updateInfo(id, body) {
    const res = await fetch(`http://localhost:3001/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await res.json();
  },
  async createProfile(id) {
    const res = await fetch(`http://localhost:3001/users/profiles`, {
      method: "POST",
      body: JSON.stringify({
        userId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async getProfile(userId, query) {
    const res = await fetch(
      `http://localhost:3001/users/${userId}/profile${
        query ? `?get=${query}` : ""
      }`
    );
    return await res.json();
  },
  async getUserProfile() {
    const res = await fetch("http://localhost:3001/users/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await res.json();
  },
  async updateProfile(body) {
    const res = await fetch(`http://localhost:3001/users/profile`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await res.json();
  },
};

export default UserAPI;
