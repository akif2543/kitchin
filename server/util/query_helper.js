const USER_SELECT = "-email -password";

const queryHelper = {
  userSelect: USER_SELECT,
  postPop: [
    {
      path: "author",
      select: USER_SELECT,
    },
    {
      path: "likes",
      select: USER_SELECT,
    },
    {
      path: "shares",
      select: USER_SELECT,
    },
    {
      path: "comments.commenter",
      select: USER_SELECT,
    },
    {
      path: "comments.likes",
      select: USER_SELECT,
    },
  ],
};

module.exports = queryHelper;
