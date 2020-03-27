import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "..//Grid";
import { List, ListItem } from "..//List";
const nl2br = require('react-nl2br');


class PostList extends Component {
    state = {
        posts: [],
        body: ""
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

      render(){
        return (
        <Col size="md-10 sm-12">
            
        {this.state.posts.length ? (
          <div>
            {this.state.posts.map(post => (
              <ListItem key={post._id}>
                <Link to={"/post/" + post._id}>
                  <strong>
                    {post.title}
                  </strong>
                </Link>
                </ListItem>
                  
            ))}
            <br />
          </div>
          
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
        )
    }
}  

export default PostList;
