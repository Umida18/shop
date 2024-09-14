import React, { useState } from "react";
import img1 from "../assets/Image(1).png";
import img4 from "../assets/Image.png";
import img5 from "../assets/Image(1).png";
import img6 from "../assets/Image(2).png";
import img7 from "../assets/Image(3).png";
import { Button, Col, Pagination, Row, Space, Typography } from "antd";
const dataCard = [
  {
    name: "UTRAANET Black",
    price: "$43.00",
    image: `${img1}`, // Replace with actual image paths
  },
  {
    name: "Elegant Ebony Sweatshirts",
    price: "$35.00",
    image: `${img7}`,
  },
  {
    name: "Sleek and Cozy Black",
    price: "$57.00",
    image: `${img6}`,
  },
  {
    name: "Raw Black Tees",
    price: "$19.00",
    image: `${img4}`,
  },
  {
    name: "MOCKUP Black",
    price: "$30.00",
    image: `${img5}`,
  },
  {
    name: "Athletic Shirt",
    price: "$35.00",
    image: `${img7}`,
  },
  {
    name: "Sleek and Cozy Black",
    price: "$57.00",
    image: `${img4}`,
  },
  {
    name: "Raw Black Tees",
    price: "$19.00",
    image: `${img5}`,
  },
  {
    name: "MOCKUP Black",
    price: "$30.00",
    image: `${img6}`,
  },
  {
    name: "Athletic Shirt",
    price: "$35.00",
    image: `${img7}`,
  },
];
const categories = ["Perfume", "Trousers", "Shoe", "Handbag", "Hat", "Thermos"];
const colors = ["#F5C156", "#F5E1A4", "#B5D6B2", "#4D82F3"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const { Text } = Typography;
const Listing = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize = 9;

  const currentCards = dataCard.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePagination = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "300px" }}>
          <div
            style={{
              width: "248px",
              height: "828px",
              border: "1px solid  #E6E7E8",
              borderRadius: "6px",
            }}
          >
            <div>
              <Text>Categories</Text>
            </div>
          </div>
        </div>
        <div>
          <Row>
            {currentCards.map((item, index) => (
              <Col lg={8} key={index} style={{ width: "240px" }}>
                <Space direction="vertical" style={{ width: "240px" }}>
                  <img src={item.image} alt="" />
                  <Typography
                    style={{
                      fontSize: "14px",
                      color: "#0E1422",
                      fontWeight: "bolder",
                      display: "flex",
                      marginBlock: "10px",
                    }}
                  >
                    Classic Monochrome Tees
                  </Typography>
                  <div style={{ display: "flex", gap: 18 }}>
                    <Button
                      style={{
                        width: "89px",
                        height: "28px",
                        borderRadius: "100px",
                        color: "#0E1422",
                        textTransform: "uppercase",
                        fontSize: "12px",
                      }}
                    >
                      In stock
                    </Button>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        justifyItems: "center",
                        alignContent: "center",
                        color: "#474B57",
                        fontSize: "14px",
                      }}
                    >
                      $35.00
                    </Typography>
                  </div>
                </Space>
              </Col>
            ))}
          </Row>
          <Pagination
            pageSize={pageSize}
            current={currentPage}
            total={dataCard.length}
            onChange={handlePagination}
          />
        </div>
      </div>
    </div>
  );
};

export default Listing;
