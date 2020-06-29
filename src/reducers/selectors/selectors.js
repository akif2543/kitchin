export const isLoggedIn = (state) => Boolean(state.session.id);

export const getCurrentUser = (state) => state.entities.users[state.session.id];

export const getSessionErrors = (state) => state.errors.session;

export const getFeedErrors = (state) => state.errors.feed;

const populateComments = (state, comments) =>
  comments.map((c) => {
    if (!c) return;
    const com = state.entities.comments[c];
    return {
      ...com,
      commenter: state.entities.users[com.commenter],
      likes: com.likes.map((l) => state.entities.users[l]),
    };
  });

export const getPosts = (state) =>
  Object.values(state.entities.posts)
    .map((p) =>
      p === undefined
        ? null
        : {
            ...p,
            author: state.entities.users[p.author],
            likes: p.likes.map((l) => state.entities.users[l]),
            shares: p.shares.map((s) => state.entities.users[s]),
            comments: populateComments(state, p.comments),
          }
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

export const getComments = (state) => state.entities.comments;

export const getUsers = (state) => state.entities.users;
