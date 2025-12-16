import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  gstTotal: number;
  total: number;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('aagam_cart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('aagam_cart', JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const gstTotal = items.reduce(
    (sum, item) =>
      sum + (item.product.price * item.quantity * item.product.gstPercentage) / 100,
    0
  );

  const total = subtotal + gstTotal;

  const addItem = (product: Product, quantity: number) => {
    if (quantity < product.moq) {
      toast({
        title: 'Minimum Order Quantity',
        description: `Minimum order quantity for ${product.name} is ${product.moq} ${product.unit}(s)`,
        variant: 'destructive',
      });
      return;
    }

    setItems(prev => {
      const existingItem = prev.find(item => item.productId === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId: product.id, quantity, product }];
    });

    toast({
      title: 'Added to Cart',
      description: `${quantity} ${product.unit}(s) of ${product.name} added`,
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.productId !== productId));
    toast({
      title: 'Removed from Cart',
      description: 'Item removed from your cart',
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const item = items.find(i => i.productId === productId);
    if (item && quantity < item.product.moq) {
      toast({
        title: 'Minimum Order Quantity',
        description: `Minimum quantity is ${item.product.moq} ${item.product.unit}(s)`,
        variant: 'destructive',
      });
      return;
    }

    setItems(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemQuantity = (productId: string): number => {
    const item = items.find(i => i.productId === productId);
    return item?.quantity || 0;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        gstTotal,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
