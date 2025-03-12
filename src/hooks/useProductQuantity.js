import { useEffect, useState } from "react";

export const useProductQuantity = (orderProducts, idProduct) => {
  const [productQuantity, setProductQuantity] = useState(0);
  // Actualizamos la cantidad en el pedido cuando cambia el array orderProducts
  useEffect(() => {
    const productMatch = orderProducts.find(
      (product) => product.id === idProduct
    );
    if (productMatch) {
      setProductQuantity(productMatch.quantity);
    } else {
      setProductQuantity(0);
    }
  }, [orderProducts]);
  return productQuantity;
};
