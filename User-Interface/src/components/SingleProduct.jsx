import React from "react";
import "./SingleProduct.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Cerated only because ${Info} is not working with scss
const Info = styled.div`
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  &:hover ${Info} {
    opacity: 1;
  }
`;

const SingleProduct = ({ item }) => {
  return (
    <Container className="container-singleProduct">
      <div className="circle"></div>
      <img src={item.img} alt="" />
      <Info className="info">
        <div className="icon">
          <ShoppingCartIcon />
        </div>

        <Link to={`/product/${item._id}`}>
          <div className="icon">
            <SearchIcon />
          </div>
        </Link>
        <div className="icon">
          <FavoriteBorderIcon />
        </div>
      </Info>
    </Container>
  );
};

export default SingleProduct;
