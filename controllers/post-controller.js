const postService = require("../service/post-service");

class PostController {
  async getPosts(req, res, next) {
    try {
      const posts = await postService.getAllPosts();
      return res.json(posts);
    } catch (e) {
      next(e);
    }
  }

  async getPostsByUserId(req, res, next) {
    try {
      const { id } = req.params;
      const posts = await postService.getPostsByUserId(id);
      return res.json(posts);
    } catch (e) {
      next(e);
    }
  }

  async createPost(req, res, next) {
    try {
      const { name, description, message, photoUrl, postedBy, timestamp } =
        req.body;
      const post = await postService.createPost(
        name,
        description,
        message,
        photoUrl,
        postedBy,
        timestamp
      );
      return res.json(post);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PostController();
