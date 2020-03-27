import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import firebase from 'firebase';
const nl2br = require('react-nl2br');

var user = firebase.auth().currentUser;
console.log(user);

class Detail extends React.Component {
  state = {
    post: {}
  };
    
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    var user = firebase.auth().currentUser;
    console.log(user);
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <br />
            <Jumbotron>
              <h1>
                {this.state.post.title} by Chu
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          <article>
              <p>
                {nl2br(this.state.post.body)}
              </p>
            </article>
          </Col>
          <Col size="md-2">
          {!user ? (
            <Link to="/blog">← Back to Blog</Link>
            ) : ( 
            <Link to="/cms">← Back to Posts</Link>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
