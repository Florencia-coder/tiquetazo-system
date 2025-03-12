import React from "react";
import "./orderSelect.css";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderId } from "../../redux/slices/orderSlice";

const OrderSelect = () => {
  const { orders, selectedOrderId } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  return (
    <select
      className="container-select"
      value={selectedOrderId}
      onChange={(e) => dispatch(selectOrderId(Number(e.target.value)))}
    >
      {orders.map((order) => (
        <option key={order.id} value={order.id}>
          Orden N°: {order.id}
        </option>
      ))}
    </select>
  );
};

export default OrderSelect;
