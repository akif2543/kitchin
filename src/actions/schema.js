import { schema } from "normalizr";

export const userSchema = new schema.Entity("users");

export const commentSchema = new schema.Entity("comments", {
  commenter: userSchema,
});

export const postSchema = new schema.Entity("posts", {
  author: userSchema,
  comments: [commentSchema],
});
