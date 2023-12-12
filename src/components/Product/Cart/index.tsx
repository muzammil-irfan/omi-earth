import { Button } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import React, { useEffect, useState } from "react";
import Product from "../../../types/Product";
import CartItem from "../../../types/Cart";
import productsData from "../../../utils/productsData";

interface CartProps {
  quantity: number;
  variantId: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  setCartItemCount: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Cart({
  isOpen,
  onClose,
  onOpen,
  quantity,
  variantId,
  setCartItemCount,
  setCount
}: CartProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItem.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItem(updatedCart);
    } else {
      setCartItemCount((prevState: number) => (prevState += 1));
      setCartItem([
        ...cartItem,
        {
          id: product.id,
          title: product.title,
          variantId: variantId,
          price:product.price,
          quantity,
        },
      ]);
    }

    setCount(1)
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cartItem.filter((item) => item.id !== productId);
    setCartItem(updatedCart);
    setCartItemCount(updatedCart.length)
  };

  const handleCart = () => {
    const productIdentifier = productsData.filter(
      (item) => item.variantId === variantId
    );
    addToCart(productIdentifier[0]);
    onOpen();
  };

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartItem.map((item) => ({ id: item.id, quantity: item.quantity }))
      )
    );
  }, [cartItem]);

  return (
    <>
      <Button
        variant="custom"
        w={{ base: "200px", md: "300px", lg: "full" }}
        onClick={handleCart}
      >
        ADD TO CART
      </Button>
      <CartDrawer
        onClose={onClose}
        isOpen={isOpen}
        removeFromCart={removeFromCart}
        cart={cartItem}
      />
    </>
  );
}
