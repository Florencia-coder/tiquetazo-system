import * as Dialog from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes, FaPlus } from "react-icons/fa";
import "./orderModal.css";
import ProductItem from "./subComponents/productItem/ProductItem";
import {
  createNewOrder,
  deleteOrder,
  addNameOrder,
} from "../../redux/slices/orderSlice";

const OrderModal = ({ isOpen, onDismiss, mesaId }) => {
  const dispatch = useDispatch();
  const { orders, selectedOrderId } = useSelector((state) => state.orders);
  const selectedOrder = orders.find((order) => order.id === selectedOrderId);
  const productItems = selectedOrder?.products || [];

  /** Calcula el total de la orden */
  const calculateTotal = () =>
    productItems.reduce((total, item) => total + item.price * item.quantity, 0);

  /** Verifica si alguna orden está vacía */
  const isAnyOrderEmpty = () =>
    orders.some((order) => order.products.length === 0 || !order.name.trim());

  /** Maneja la acción de realizar el pedido */
  const handleOrderSubmission = () => {
    if (isAnyOrderEmpty()) {
      alert(
        "⚠️ Todas las órdenes deben tener al menos un producto y un nombre de cliente."
      );
      return;
    }
    alert("✅ Pedido realizado con éxito.");
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="header-modal">
            <h2>Pedido de orden N° {selectedOrderId}</h2>
            <FaTimes onClick={onDismiss} />
          </div>
          <section className="section-info">
            <div className="info-table">
              <h5>Mesa N° {mesaId}</h5>
            </div>
            <div className="info-client">
              <div className="client-row">
                <label className="info-label">Nombre de cliente:</label>
              </div>
              <input
                className="info-input"
                type="text"
                value={selectedOrder.name}
                onChange={(e) => dispatch(addNameOrder(e.target.value))}
                placeholder="Ingresa tu nombre"
              />
            </div>
          </section>
          <div className="divisor" />
          <section className="section-products">
            <h3 style={{ marginBottom: "8px" }}>Productos</h3>
            {productItems.length > 0 ? (
              productItems.map((item) => (
                <ProductItem
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))
            ) : (
              <p style={{ fontSize: "small" }}>
                Aún no hay productos en el pedido
              </p>
            )}
            <div className="container-total">
              <h4>Total:</h4>
              <h4>${calculateTotal().toFixed(2)}</h4>
            </div>
          </section>

          <div className="divisor" />

          <div className="row-buttons">
            <button
              className="button-share"
              onClick={() => dispatch(createNewOrder())}
            >
              Compartir mesa
              <FaPlus />
            </button>
            {orders.length > 1 && (
              <button
                className="button-delete"
                onClick={() => dispatch(deleteOrder(selectedOrderId))}
              >
                Eliminar orden {selectedOrderId}
                <FaTimes />
              </button>
            )}
          </div>

          <button className="button-order" onClick={handleOrderSubmission}>
            {orders.length > 1
              ? `Realizar los pedidos (${orders.length})`
              : "Realizar el pedido"}
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default OrderModal;
