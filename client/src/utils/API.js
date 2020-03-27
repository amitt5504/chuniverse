import axios from "axios";

export default {
  // Gets all books
  getPosts: function() {
    return axios.get("/api/post");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/post/" + id);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/post/" + id);
  },
  // Saves a book to the database
  savePost: function(postData) {
    return axios.post("/api/post", postData);
  }
};