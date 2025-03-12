import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import ProductCard from "../components/productCard/ProductCard";
import CategoryProduct from "../components/categoryProduct/CategoryProduct";
import OrderModal from "../components/orderModal/OrderModal";
import OrderSelect from "../components/orderSelect/OrderSelect";
import { useMenu } from "../hooks/useMenu";
import { useCategories } from "../hooks/useCategories";
import { useFilteredMenu } from "../hooks/useFilteredMenu";
import "./menu.css";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const mesaId = searchParams.get("mesa");

  const categories = useCategories();
  const menu = useMenu();

  const [selectedCategory, setSelectedCategory] = useState(1);

  const filteredItems = useFilteredMenu(menu, selectedCategory);

  const selectedOrderId = useSelector((state) => state.orders.selectedOrderId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDismiss = () => setIsModalOpen(false);

  return (
    <div className="menu-container">
      <CategoryProduct
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <OrderSelect />

      <div className="menu-items">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="menu-footer" onClick={() => setIsModalOpen(true)}>
        <h4>Pedido de orden N° {selectedOrderId}</h4>
        <IoIosArrowUp />
      </div>

      <OrderModal isOpen={isModalOpen} onDismiss={onDismiss} mesaId={mesaId} />
    </div>
  );
};

export default Menu;
