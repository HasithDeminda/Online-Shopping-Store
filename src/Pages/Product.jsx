import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Product.scss";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2]; //Split the pathname

  const [product, setProduct] = useState({});
  const [quantity, setquantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setquantity(quantity + 1);
    } else if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  // console.log(product);

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, size, color }));
  };
  return (
    <div className="pages-container-product">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="image-container">
          <img src={product.img} alt="" />
        </div>

        <div className="Info-container">
          <h1 className="title">{product.title}</h1>
          <p className="description">{product.desc}</p>
          <span className="price">{product.price} USD</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filterTitle">Color</span>
              {product.color?.map((c) => (
                <div
                  className="filterColor"
                  key={c}
                  style={{ backgroundColor: `${c}` }}
                  onClick={() => setColor(c)}
                ></div>
              ))}

              {/* <div
                className="filterColor"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="filterColor"
                
              ></div> */}
            </div>

            <div className="filter">
              <span className="filterTitle">Size</span>
              <select
                className="filterSize"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="addContainer">
            <div className="amountContainer">
              <RemoveCircleIcon onClick={() => handleQuantity("dec")} />
              <span className="amount">{quantity}</span>
              <AddCircleIcon onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={handleClick}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
