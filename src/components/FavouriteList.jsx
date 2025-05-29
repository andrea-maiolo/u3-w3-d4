import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromListAction } from "../redux/actions";

const FavouriteList = () => {
  const favList = useSelector((state) => state.favorite.content);

  const dispatch = useDispatch();

  return (
    <>
      {favList.length > 0 ? (
        <Container fluid>
          <h1>Here are your saved jobs</h1>
          {favList.map((ele, i) => (
            <Row key={i} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col xs={3}>
                <Link to={`/${ele.company_name}`}>{ele.company_name}</Link>
              </Col>
              <Col xs={9}>
                <a href={ele.url} target="_blank" rel="noreferrer">
                  {ele.title}
                </a>
                <Button
                  className="ms-3 btn-danger"
                  onClick={() => {
                    dispatch(deleteFromListAction(i));
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Container>
      ) : (
        <Container fluid>
          <h1>Add favorites job to see them here</h1>
        </Container>
      )}
    </>
  );
};

export default FavouriteList;
