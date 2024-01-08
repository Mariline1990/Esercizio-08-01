import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <Row>
          <Col xs={12} md={9}>
            <BookList books={fantasy} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
