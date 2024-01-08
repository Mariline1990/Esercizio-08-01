import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    currentAsin: null,
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className=" mt-3" xs={1} md={2}>
          <Col md={6}>
            {this.props.books
              .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
              .map((b) => (
                <Col md={12} key={b.asin}>
                  <SingleBook book={b} />
                </Col>
              ))}
          </Col>
          <Col md={6}>
            <CommentArea asin={this.state.currentAsin}></CommentArea>
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
