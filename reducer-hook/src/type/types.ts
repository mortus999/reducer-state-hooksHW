export interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
  }
  
  export type ShoppingCartAction =
    | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
    | { type: 'REMOVE_ITEM'; payload: number };
  
  export const shoppingCartReducer = (state: ShoppingCartItem[], action: ShoppingCartAction): ShoppingCartItem[] => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload];
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  };
  
  export const availableItems: ShoppingCartItem[] = [
    { id: 1, name: 'Grape', price: 7.99 },
    { id: 2, name: 'Salad', price: 14 },
    { id: 3, name: 'Iphone Charger', price: 300000 },
  ];