import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext"; 
import { formatNumber } from "../helpers/formatNumber";

const Cart = () => {
  const { carrito, increment, decrement, total } = useContext(CartContext);
  const { token } = useUser(); 

  const isCartEmpty = carrito.length === 0; 
  const isLoggedOut = !token; 

  return (
    <main className="container">
      <div className="p-5">
        <h5>Detalles del pedido:</h5>
        <div>
          {carrito.map((producto, i) => (
            <div key={i} className="d-flex justify-content-between py-2">
              <div className="d-flex justify-content-between align-items-center">
                <img src={producto.img} width="50" alt="" />
                <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
              </div>

              <div className="d-flex justify-content-end align-items-center">
                <h6 className="mb-0 pe-3">
                  ${formatNumber(producto.price * producto.count)}
                </h6>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => decrement(i)}
                >
                  -
                </button>
                <b className="px-3">{producto.count}</b>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => increment(i)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2 className="my-4">Total: ${formatNumber(total)}</h2>
          <button
            className="btn btn-dark"
            disabled={isCartEmpty || isLoggedOut} // Deshabilitar si el carrito está vacío o el usuario no está autenticado
            // onClick={processPayment}
          >
            Pagar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
