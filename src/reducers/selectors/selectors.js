export const isLoggedIn = (state) => Boolean(state.session.id);

export const getCurrentUser = (state) => state.entities.users[state.session.id];

export const getSessionErrors = (state) => state.errors.session;

export const getPosts = (state) => Object.values(state.entities.posts);

export const getUsers = (state) => state.entities.users;
