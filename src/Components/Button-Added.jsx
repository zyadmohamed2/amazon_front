import { useCart } from './CartContext';
import PropTypes from 'prop-types';

const AddToCartButton = ({ Products }) => {
  const { addToCart } = useCart();

  return (
    <button className='Show' onClick={() => addToCart(Products)}>
      Add to Cart
    </button>
  );
};

AddToCartButton.propTypes = {
  Products: PropTypes.object.isRequired,
};

export default AddToCartButton;




