import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../helpers/formatNumber";
import PropTypes from "prop-types";

const CardPizza = ({ name, price, ingredients, img, id }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleVerMas = () => {
    navigate(`/pizzas/${id}`); 
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={img}
          alt={name}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title text-capitalize">Pizza {name}</h4>
        </div>
        <ul className="list-group list-group-flush">
          <h5 className="lead text-center fw-semibold my-2">Ingredientes:</h5>
          {ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="list-group-item"
            >
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <h3 className="text-center text-dark py-3">
          Precio: ${formatNumber(price)}
        </h3>

        <div className="d-flex justify-content-around mb-4">
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={handleVerMas} 
          >
            Ver Más &#128064;
          </button>

          <button
            className="btn btn-sm btn-dark"
            onClick={() => addToCart({ id, price, name, img })}
          >
            Añadir &#128722;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
