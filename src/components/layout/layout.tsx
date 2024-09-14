/** @jsxImportSource @emotion/react */
import {
  Button,
  Col,
  Dropdown,
  Input,
  Menu,
  MenuProps,
  Row,
  Space,
  Typography,
} from "antd";

import { Layout as AntLayout } from "antd";
import logoWhite from "../../img/logoWhite.png";
import { GiShoppingCart } from "react-icons/gi";
import { PiUserCircleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "./l.css";
import {
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { SiMastercard } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import HomePage from "../../page/homepage";
import img1 from "../../img/logo.png";

const { Header, Content, Footer } = AntLayout;

const { Text } = Typography;
const categoriesMenu: MenuProps["items"] = [
  {
    key: "1",
    label: "Category 1",
  },
  {
    key: "2",
    label: "Category 2",
  },
  {
    key: "3",
    label: "Category 3",
  },
];

const customStyles = css`
  :where(
      .css-dev-only-do-not-override-qnu6hi
    ).ant-menu-light.ant-menu-horizontal
    > .ant-menu-item-selected::after,
  :where(.css-dev-only-do-not-override-qnu6hi).ant-menu-light
    > .ant-menu.ant-menu-horizontal
    > .ant-menu-item-selected::after,
  :where(
      .css-dev-only-do-not-override-qnu6hi
    ).ant-menu-light.ant-menu-horizontal
    > .ant-menu-submenu-selected::after,
  :where(.css-dev-only-do-not-override-qnu6hi).ant-menu-light
    > .ant-menu.ant-menu-horizontal
    > .ant-menu-submenu-selected::after {
    border-bottom-width: 0px;
    border-bottom-color: none;
    color: #0e1422;
  }
`;
const StyledMeniItem = styled(Menu.Item)`
  ${customStyles}
`;
const StyledButton = styled(Button)`
  ${customStyles}
`;
const Layout = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px",
          height: "124px",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <div
          style={{ height: "40px", width: "100%" }}
          className="bg-[#0E1422] h-[40px] flex justify-center items-center gap-1"
        >
          <div>
            <Text style={{ color: "white", fontSize: "14px" }}>
              Get 25% OFF on your first order.
            </Text>
            <Text style={{ color: "white" }}>Order Now</Text>
          </div>
        </div>
        <div className="bg-white" style={{ height: "84px", width: "1160px" }}>
          <Row
            justify={"space-between"}
            style={{ height: "84px" }}
            align={"middle"}
          >
            <Col>
              <div style={{ display: "flex", width: "250px", gap: 12 }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0E1422",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "16px",
                        height: "26px",
                        objectFit: "cover",
                      }}
                      src={logoWhite}
                      alt="logo"
                    />
                  </div>
                </div>
                <Typography
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 800,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Ecommerce
                </Typography>
              </div>
            </Col>
            <Col flex="auto">
              <div>
                <Menu
                  mode="horizontal"
                  style={{
                    // fontFamily: "Manrope",
                    // fontSize: "20px",
                    // fontWeight: 800,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Menu.Item
                    css={customStyles}
                    style={{ color: "#5C5F6A", fontSize: "14px" }}
                    key="home"
                  >
                    Home
                  </Menu.Item>
                  <Dropdown menu={{ items: categoriesMenu }}>
                    <StyledButton
                      css={customStyles}
                      style={{
                        color: "#5C5F6A",
                        fontSize: "14px",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                      key="categories"
                    >
                      Categories
                    </StyledButton>
                  </Dropdown>
                  <Menu.Item
                    css={customStyles}
                    style={{ color: "#5C5F6A", fontSize: "14px" }}
                    key="about"
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    css={customStyles}
                    style={{ color: "#5C5F6A", fontSize: "14px" }}
                    key="contact"
                  >
                    Contact
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "370px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Input
                    style={{ width: "264px", height: "45px" }}
                    placeholder="Search products"
                    prefix={
                      <CiSearch
                        style={{ fontSize: "24px", color: "#878A92" }}
                      />
                    }
                  />
                </div>
                <div>
                  <GiShoppingCart
                    style={{ fontSize: "20px", cursor: "pointer" }}
                  />
                </div>
                <div>
                  <PiUserCircleThin
                    style={{ fontSize: "20px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Header>
      <Content
        style={{
          // height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomePage />
      </Content>
      <Footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "1160px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "400px",
          }}
        >
          <Row justify={"space-between"} style={{ paddingTop: "50px" }}>
            <Col xs={24} sm={12} md={6}>
              <Space direction="vertical">
                <div style={{ display: "flex", gap: 18, marginBottom: "10px" }}>
                  <div
                    style={{
                      height: "44px",
                      width: "44px",
                      borderRadius: "6px",
                      border: "1px solid #E6E7E8",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        objectFit: "cover",
                      }}
                      src={img1}
                      alt=""
                    />
                  </div>
                  <Text
                    strong
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      fontWeight: 800,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Ecommerce
                  </Text>
                </div>
                <Text style={{ color: "#5C5F6A", fontSize: "14px" }}>
                  DevCut is a YouTube channel for practical project-based
                  learning.
                </Text>
                <Space
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    gap: 25,
                  }}
                >
                  <GithubOutlined
                    style={{
                      fontSize: "24px",
                      color: "#5C5F6A",
                      cursor: "pointer",
                    }}
                  />
                  <InstagramOutlined
                    style={{
                      fontSize: "24px",
                      color: "#5C5F6A",
                      cursor: "pointer",
                    }}
                  />
                  <YoutubeOutlined
                    style={{
                      fontSize: "24px",
                      color: "#5C5F6A",
                      cursor: "pointer",
                    }}
                  />
                </Space>
              </Space>
            </Col>
            <Col xs={24} sm={12} md={4}>
              <Space direction="vertical">
                <Text
                  style={{
                    color: "#878A92",
                    fontWeight: 600,
                    display: "flex",
                    marginBottom: "25px",
                  }}
                >
                  SUPPORT
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  FAQ
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  Terms of use
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  Privacy Policy
                </Text>
              </Space>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Space direction="vertical">
                <Text
                  style={{
                    color: "#878A92",
                    fontWeight: 600,
                    display: "flex",
                    marginBottom: "25px",
                  }}
                >
                  COMPANY
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  About us
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  Contact
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  Careers
                </Text>
              </Space>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Space direction="vertical">
                <Text
                  style={{
                    color: "#878A92",
                    fontWeight: 600,
                    display: "flex",
                    marginBottom: "25px",
                  }}
                >
                  SHOP
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  My Account
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  Checkout
                </Text>
                <Text
                  style={{
                    cursor: "pointer",
                    color: "#5C5F6A",
                    fontWeight: 600,
                    display: "flex",
                    marginBlock: "5px",
                  }}
                >
                  Cart
                </Text>
              </Space>
            </Col>

            <Col
              xs={24}
              sm={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <Space
                direction="vertical"
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }
                }
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#878A92",
                    letterSpacing: 1.1,
                    fontWeight: 600,
                  }}
                >
                  ACCEPTED PAYMENTS
                </Text>
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "30px",
                  }}
                >
                  <SiMastercard
                    style={{ fontSize: "34px", color: "#5C5F6A" }}
                  />
                  <GrAmex style={{ fontSize: "34px", color: "#5C5F6A" }} />
                  <RiVisaLine style={{ fontSize: "34px", color: "#5C5F6A" }} />
                </Space>
              </Space>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{ marginTop: "40px", borderTop: "1px solid #F6F6F6" }}
          >
            <Text style={{ marginTop: "20px" }} type="secondary">
              © 2023 DevCut. All rights reserved.
            </Text>
          </Row>
        </div>
      </Footer>
    </>
  );
};

export default Layout;
