import React, { useReducer, useState } from 'react';
import { ShoppingCartItem, shoppingCartReducer, availableItems } from '../type/types';

const initialCartState: ShoppingCartItem[] = [];

const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCartState);
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>(undefined);

  
  const addToCart = () => {
    const selectedItem = availableItems.find(item => item.id === selectedItemId);
    if (selectedItem) {
      dispatch({ type: 'ADD_ITEM', payload: selectedItem });
    }
  };


  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };


  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };







  return (
    <div className="shop-cart">
      <div className="select-item">
        <select value={selectedItemId} onChange={(e) => setSelectedItemId(Number(e.target.value))}>
          <option value={undefined}>Pick Items</option>
          {availableItems.map(item => (
            <option key={item.id} value={item.id}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>
        <button onClick={addToCart} disabled={selectedItemId === undefined}>Add Items</button>
      </div>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${calculateTotalCost()}</p>
    </div>
  );
};

export default ShoppingCart;
