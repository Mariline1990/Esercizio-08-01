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
          <Col className="text-center">
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

        <Row md={2}>
          <Col>
            <Row className=" mt-3">
              {this.props.books
                .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                .map((b) => (
                  <Col key={b.asin}>
                    <SingleBook book={b} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col>
            <CommentArea asin={this.state.currentAsin}></CommentArea>
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
