import axios from "axios";

const FeedAPI = {
  fetchPosts: (date) => axios.get(`/api/feed${date ? `?date=${date}` : ""}`),
  createPost: (post) => axios.post("/api/feed", post),
  togglePost: (info) => axios.put("/api/feed/toggle", info),
  addComment: (comment) => axios.put("/api/feed/comment", comment),
  toggleComment: (info) => axios.put("/api/feed/comment/like", info),
};

export default FeedAPI;
