const PostModel = require("./../models/post-model");

class PostService {
  async getAllPosts() {
    const posts = await PostModel.find();
    return posts;
  }

  async getPostsByUserId(id) {
    const posts = await PostModel.find({ postedBy: id });
    if (!posts) {
      throw ApiError.BadRequest("Posts not found");
    }
    return posts;
  }

  async createPost(name, description, message, photoUrl, postedBy, timestamp) {
    const post = PostModel.create({
      name,
      description,
      message,
      photoUrl,
      postedBy,
      timestamp,
    });
    return post;
  }
}

module.exports = new PostService();
