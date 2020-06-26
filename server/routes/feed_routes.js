const express = require("express");

const Post = require("../models/post");
const { postPop } = require("../util/query_helper");

const router = express.Router();

router.get("/post", (req, res) => {
  Post.findById(req.body.id)
    .populate(postPop)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(404).json(err);
    });
});

router.put("/toggle", async (req, res) => {
  const userId = req.user.id;
  const { postId, like } = req.body;

  const post = await Post.findById(postId);

  if (post) {
    if (like) {
      if (post.likes.includes(userId)) {
        post.likes.splice(post.likes.indexOf(userId), 1);
      } else {
        post.likes.push(userId);
      }
    } else {
      if (post.shares.includes(userId)) {
        post.shares.splice(post.shares.indexOf(userId), 1);
      } else {
        post.shares.push(userId);
      }
    }

    const saved = await post.save();
    Post.populate(saved, postPop)
      .then((updatedPost) => res.status(200).json(updatedPost))
      .catch((e) => {
        console.log(e);
        res.status(500).json(e);
      });
  } else {
    res.status(404).end();
  }
});

router.put("/comment", (req, res) => {
  const comment = {
    commenter: req.user.id,
    body: req.body.body,
  };

  const { id } = req.body;

  Post.findOneAndUpdate(
    { _id: id },
    { $push: { comments: comment } },
    { new: true }
  )
    .populate(postPop)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json(e);
    });
});

router.put("/comment/like", (req, res) => {
  const userId = req.user.id;

  const { postId, commentId } = req.body;

  Post.findById(postId)
    .then((post) => {
      const comment = post.comments.id(commentId);
      const { likes } = comment;
      if (likes.includes(userId)) {
        likes.splice(likes.indexOf(userId), 1);
      } else {
        likes.push(userId);
      }
      comment.set(likes);
      post
        .save()
        .then((updatedPost) => Post.populate(updatedPost, postPop))
        .then((populatedPost) => res.status(200).send(populatedPost))
        .catch((e) => res.status(500).json(e));
    })
    .catch((e) => res.status(404).json(e));
});

router.get("/", (req, res) => {
  const timestamp = req.query.date;
  const dateFilter = timestamp ? { date: { $lt: new Date(timestamp) } } : null;

  Post.find(dateFilter)
    .sort({ date: -1 })
    .limit(5)
    .populate(postPop)
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(404).json(err));
});

router.post("/", async (req, res) => {
  if (!Boolean(req.body.body.trim().length))
    return res.status(422).json({ error: "You cannot make an empty post!" });

  const postData = {
    author: req.user.id,
    body: req.body.body,
    image: req.body.image,
  };

  const post = new Post(postData);

  const savedPost = await post.save();

  Post.populate(savedPost, postPop, (err, populatedPost) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(populatedPost);
    }
  });
});

module.exports = router;
