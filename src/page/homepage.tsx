import { Button, Col, Input, Row, Space, Typography } from "antd";
import img1 from "../assets/p.png";
import img2 from "../assets/Ellipse.png";
import img3 from "../assets/Burst-pucker.png";
import img4 from "../assets/Image.png";
import img5 from "../assets/Image(1).png";
import img6 from "../assets/Image(2).png";
import img7 from "../assets/Image(3).png";
import img8 from "../assets/Category Image.png";
import { ButtonPrimary } from "../components/components";
import { FaArrowRightLong } from "react-icons/fa6";

const { Title, Text } = Typography;
const HomePage = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F6F6F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            height: "440px",
            width: "1160px",
            backgroundColor: "#F6F6F6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col
            xs={12}
            sm={12}
            md={6}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              width: "320px",
              textAlign: "left",
            }}
          >
            <Space
              direction="vertical"
              style={{
                width: "320px",
                height: "170px",
              }}
            >
              <Title
                style={{
                  marginBottom: "10px",
                  fontSize: "32px",
                  color: "#202533",
                  width: "320px",
                }}
              >
                Fresh Arrivals Online
              </Title>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#474B57",
                  marginBottom: "0px",
                }}
              >
                Discover Our Newest Collection Today.
              </Text>
              <ButtonPrimary>
                View Collection
                <span style={{ marginInline: "5px" }}>
                  <FaArrowRightLong style={{ fontSize: "16px" }} />
                </span>
              </ButtonPrimary>
            </Space>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Space direction="vertical">
              <img
                style={{ position: "relative", top: "30px" }}
                src={img3}
                alt=""
              />
              <div style={{ height: "340px", width: "340px" }}>
                <img
                  style={{ height: "340px", width: "340px" }}
                  src={img2}
                  alt=""
                />
              </div>
              <img
                style={{
                  width: "255px",
                  height: "382px",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                src={img1}
              />
            </Space>
          </Col>
        </Row>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          justify={"space-between"}
          style={{
            height: "400px",
            width: "1160px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col xs={24} sm={24} md={12} lg={8}>
            <Space direction="vertical">
              <div
                style={{
                  height: "48px",
                  width: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>icon</p>
              </div>
              <Title style={{ fontSize: "16px", color: "#202533" }}>
                Free Shipping
              </Title>
              <Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  width: "272px",
                  color: "#5C5F6A",
                }}
              >
                Upgrade your style today and get FREE shipping on all orders!
                Don't miss out.
              </Text>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Space direction="vertical">
              <div
                style={{
                  height: "48px",
                  width: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>icon</p>
              </div>
              <Title style={{ fontSize: "16px", color: "#202533" }}>
                Satisfaction Guarantee
              </Title>
              <Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  width: "272px",
                  color: "#5C5F6A",
                }}
              >
                Shop confidently with our Satisfaction Guarantee: Love it or get
                a refund.
              </Text>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Space direction="vertical">
              <div
                style={{
                  height: "48px",
                  width: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>icon</p>
              </div>
              <Title style={{ fontSize: "16px", color: "#202533" }}>
                Secure Payment
              </Title>
              <Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  width: "272px",
                  color: "#5C5F6A",
                }}
              >
                Your security is our priority. Your payments are secure with us.
              </Text>
            </Space>
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          alignContent: "center",
          flexDirection: "column",
          height: "800px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "200px",
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              color: "#878A92",
              fontSize: "12px",
            }}
          >
            Shop now
          </Text>
          <Text style={{ fontSize: "24px", color: "#0E1422", fontWeight: 700 }}>
            Best Selling
          </Text>
        </div>
        <Row
          style={{
            // height: "400px",
            width: "1160px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img4} alt="" />
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
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img5} alt="" />
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
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img6} alt="" />
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
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img7} alt="" />
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
        </Row>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F6F6F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            height: "310px",
            width: "1160px",
            backgroundColor: "#F6F6F6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              width: "450px",
              textAlign: "left",
            }}
          >
            <Space
              direction="vertical"
              style={{
                width: "440px",
                height: "170px",
              }}
            >
              <Title
                style={{
                  marginBottom: "10px",
                  fontSize: "32px",
                  color: "#202533",
                  width: "320px",
                }}
              >
                Browse Our Fashion Paradise!
              </Title>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#474B57",
                  marginBottom: "0px",
                  width: "480px",
                }}
              >
                Step into a world of style and explore our diverse collection of
                clothing categories.
              </Text>
              <ButtonPrimary>
                Start Browsing
                <span style={{ marginInline: "5px" }}>
                  <FaArrowRightLong style={{ fontSize: "16px" }} />
                </span>
              </ButtonPrimary>
            </Space>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Space direction="vertical">
              <img
                style={{
                  width: "225px",
                  height: "311px",
                  // position: "absolute",
                  // top: 0,
                  // right: 0,
                }}
                src={img8}
              />
            </Space>
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          alignContent: "center",
          flexDirection: "column",
          height: "800px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            height: "200px",
            gap: 18,
          }}
        >
          <Button
            style={{
              width: "89px",
              height: "28px",
              borderRadius: "100px",
              color: "#202533",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Featured
          </Button>
          <Text style={{ fontSize: "14px", color: "#5C5F6A" }}>Latest</Text>
        </div>
        <Row
          style={{
            // height: "400px",
            width: "1160px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img4} alt="" />
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
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img5} alt="" />
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
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img6} alt="" />
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
          <Col style={{ width: "240px" }}>
            <Space direction="vertical" style={{ width: "240px" }}>
              <img src={img7} alt="" />
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
        </Row>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F6F6F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            height: "200px",
            width: "1160px",
            backgroundColor: "#F6F6F6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              width: "450px",
              textAlign: "left",
            }}
          >
            <Space
              direction="vertical"
              style={{
                width: "440px",
                height: "170px",
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Title
                style={{
                  marginBottom: "10px",
                  fontSize: "32px",
                  color: "#202533",
                  width: "320px",
                }}
              >
                Join Our Newsletter
              </Title>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#474B57",
                  marginBottom: "0px",
                  width: "480px",
                }}
              >
                We love to surprise our subscribers with occasional gifts.
              </Text>
            </Space>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Space direction="horizontal">
              <Input
                placeholder="Your email address"
                style={{ width: "320px", height: "45px" }}
              />
              <ButtonPrimary>
                Start Browsing
                <span style={{ marginInline: "5px" }}>
                  <FaArrowRightLong style={{ fontSize: "16px" }} />
                </span>
              </ButtonPrimary>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
