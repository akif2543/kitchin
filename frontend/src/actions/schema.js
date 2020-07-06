import { schema } from "normalizr";

const userProcess = (val, parent, key) => {
  switch (key) {
    case "author":
      return { ...val, posts: [parent._id] };
    case "commenter":
      return { ...val, comments: [parent._id] };
    case "likes":
      return { ...val, likes: [parent._id] };
    case "shares":
      return { ...val, shares: [parent._id] };
    default:
      return val;
  }
};

const userMerge = (userA, userB) => ({
  ...userA,
  ...userB,
  posts: mergeProp(userA.posts, userB.posts),
  comments: mergeProp(userA.comments, userB.comments),
  likes: mergeProp(userA.likes, userB.likes),
  shares: mergeProp(userA.shares, userB.shares),
});

const mergeProp = (a, b) => {
  const aProp = a !== undefined ? a : [];
  const bProp = b !== undefined ? b : [];
  return aProp.concat(bProp);
};

export const userSchema = new schema.Entity(
  "users",
  {},
  { idAttribute: "_id", processStrategy: userProcess, mergeStrategy: userMerge }
);

export const commentSchema = new schema.Entity(
  "comments",
  {
    commenter: userSchema,
    likes: [userSchema],
  },
  { idAttribute: "_id" }
);

export const postSchema = new schema.Entity(
  "posts",
  {
    author: userSchema,
    likes: [userSchema],
    shares: [userSchema],
    comments: [commentSchema],
  },
  { idAttribute: "_id" }
);
