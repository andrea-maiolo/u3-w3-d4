import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToFavAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const currentFavList = useSelector((state) => state.favorite.content);
  const [errorFav, setErrorFav] = useState(null);

  const checkPayload = (payload) => {
    console.log(payload);
    if (currentFavList.some((ele) => ele._id === payload._id)) {
      setErrorFav("seems already saved");
      return;
    } else {
      dispatch(setToFavAction(payload));
    }
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          className="ms-2 btn-success"
          onClick={() => {
            checkPayload(data);
            // dispatch(setToFavAction(data));
          }}
        >
          Add to favourites
        </Button>
        {errorFav && <p>{errorFav}</p>}
      </Col>
    </Row>
  );
};

export default Job;
