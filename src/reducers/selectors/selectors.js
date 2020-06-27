export const isLoggedIn = (state) => Boolean(state.session.id);

export const getCurrentUser = (state) => state.entities.users[state.session.id];

export const getSessionErrors = (state) => state.errors.session;
