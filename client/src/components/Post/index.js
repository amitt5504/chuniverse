import React, { Component } from "react";
import Delete from "..//Delete";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "..//Grid";
import { List, ListItem } from "..//List";
import { Input, TextArea, FormBtn } from "..//Form";

class Post extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
    date: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: "", body: "", date: "" })
      )
      .catch(err => console.log(err));
     
  };


  deletePost = id => {
    API.deletePost(id)
      .then(res => this.loadPosts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      API.savePost({
        title: this.state.title,
        body: this.state.body,
        date: this.state.date
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Body"
              />
              <FormBtn
                disabled={!(this.state.body && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Post
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/post/" + post._id}>
                      <strong>
                        {post.title}
                      </strong>
                    </Link>
                    <Delete onClick={() => this.deletePost(post._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Post;