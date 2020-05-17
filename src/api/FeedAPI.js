import NewPost from "../NewPost";

const FeedAPI = {
  async getPosts(date) {
    const res = await fetch(
      `http://localhost:3001/feed/posts${date ? `?date=${date}` : ""}`
    );
    return await res.json();
  },
  async NewPost(body) {
    const response = await fetch("http://localhost:3001/feed/post", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await response.json();
  },
  async postToggleable(postId, like) {
    const response = await fetch("http://localhost:3001/feed/post/toggle", {
      method: "PUT",
      body: JSON.stringify({
        postId: postId,
        like: like,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await response.json();
  },
  async addComment(postId, body) {
    let res = await fetch(`http://localhost:3001/feed/post/${postId}/comment`, {
      method: "POST",
      body: JSON.stringify({
        body: body,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    return await res.json();
  },
};

export default FeedAPI;
