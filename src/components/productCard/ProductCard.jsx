import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productCard.css";
import { useProductQuantity } from "../../hooks/useProductQuantity";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../redux/slices/orderSlice";

const ProductCard = ({ product }) => {
  const { name, price, description, id } = product;
  const currentOrder = useSelector((state) =>
    state.orders.orders.find(
      (order) => order.id === state.orders.selectedOrderId
    )
  );
  const orderProducts = currentOrder?.products || [];
  const productQuantity = useProductQuantity(orderProducts, id);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    toast.success("Producto agregado");
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(id));
    toast.error("Producto eliminado");
  };

  return (
    <div className="product-card">
      <div className="product-card__info">
        <div className="product-card__title">
          <h4>{name}</h4>
        </div>
        <p className="product-card__description">
          {description?.length > 0
            ? description
            : "Descripción en proceso de carga."}
        </p>
      </div>
      <div className="product-card__number">
        <span className="product-card__price">${price}</span>
        {productQuantity > 0 ? (
          <div className="product-card__buttons">
            <button
              className="product-card__quantity-button"
              onClick={handleRemoveProduct}
            >
              <FaMinus />
            </button>
            <h5>{productQuantity}</h5>
            <button
              className="product-card__quantity-button"
              onClick={handleAddProduct}
            >
              <FaPlus />
            </button>
          </div>
        ) : (
          <button className="product-card__button" onClick={handleAddProduct}>
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
