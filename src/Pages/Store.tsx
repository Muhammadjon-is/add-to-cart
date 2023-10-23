import StoreItems from "../Data/items.json";
import { Col, Row } from "react-bootstrap";
import {StoreItem } from "../Components/StoreItem.tsx";
function Store() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
