import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  //Styled components
  const Container = styled.div`
    height: 60px;
    @media only screen and (max-width: 380px) {
      height: 50px;
      overflow: "hidden";
    }
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 380px) {
      padding: 10px 0px;
    }
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 380px) {
      margin: 0px 10px;
    }
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    @media only screen and (max-width: 380px) {
      justify-content: center;
      flex: 2;
    }
  `;

  const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    @media only screen and (max-width: 380px) {
      display: none;
    }
  `;

  const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    @media only screen and (max-width: 380px) {
    }
  `;

  const Input = styled.input`
    border: none;
    @media only screen and (max-width: 380px) {
      width: 50px;
    }
  `;

  const Logo = styled.h1`
    font-weight: bold;
    @media only screen and (max-width: 380px) {
      font-size: 24px;
    }
  `;
  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media only screen and (max-width: 380px) {
      font-size: 12px;
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
  `;

  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>ZigZag</Logo>
        </Center>

        <Right>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
