import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Stack,
  Text,
  Flex,
  StackDivider,
  HStack,
} from "@chakra-ui/react";
import ProceedToCheckout from "./ProceedToCheckout";
import Cart from "../../../types/Cart";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart[];
  removeFromCart: (productId: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  removeFromCart,
}) => {
  const calculateTotalAmount = () => {
    const total = cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
    return total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader color="black">Your Cart</DrawerHeader>
        <DrawerBody>
          <Stack justifyContent={"space-between"} height="full">
            <Stack gap={5}>
              {cart.length == 0 ? (
                <Text textAlign="center" mt={4}>
                  Your Cart is Empty
                </Text>
              ) : (
                cart.map((item) => (
                  <Flex
                    borderBottom="1px"
                    key={item.id}
                    py={4}
                    justifyContent={"space-between"}
                    alignItems="end"
                  >
                    <Stack justifyContent="space-between">
                      <span>{item.title}</span>
                      <span>Qty: {item.quantity}</span>
                      <span>Price: {item.price}</span>
                    </Stack>
                    <Button
                      colorScheme="red"
                      size="xs"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Flex>
                ))
              )}
            </Stack>
            {cart.length > 0 && (
              <Stack divider={<StackDivider />}>
                <HStack justifyContent="space-between">
                  <span>Total Amount: </span>
                  <span>$ {calculateTotalAmount()}</span>
                </HStack>
                <ProceedToCheckout cart={cart} />
              </Stack>
            )}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
