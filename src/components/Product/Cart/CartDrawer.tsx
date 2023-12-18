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
  IconButton,
} from "@chakra-ui/react";
import ProceedToCheckout from "./ProceedToCheckout";
import Cart from "../../../types/Cart";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart[];
  removeFromCart: (productId: string) => void;
  setCartItem: any;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  removeFromCart,
  setCartItem,
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

  const increment = (id) => {
    setCartItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decrement = (id) => {
    setCartItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
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
                    gap={2}
                    // justifyContent={"space-between"}
                    // alignItems="end"
                    flexDir={"column"}
                  >
                    <Stack justifyContent="space-between">
                      <span>{item.title}</span>
                      {/* <span>Qty: {item.quantity}</span> */}
                      <span>Price: {item.price}</span>
                    </Stack>
                    <HStack justifyContent={"space-between"}>
                      <HStack
                        // width="140px"
                        // border="2px solid #ECEEF2"
                        borderRadius={40}
                        // padding={"4px"}
                        bg="white"
                        justifyContent={"space-evenly"}
                      >
                        <span>Qty: </span>
                        <IconButton
                          icon={<FaMinus />}
                          aria-label="Decrement"
                          onClick={() => {
                            if (item.quantity > 1) {
                              decrement(item.id);
                            }
                          }}
                          color="#CED9DF"
                          size="xs"
                          bg="unset"
                          isDisabled={item.quantity <= 1}
                        />
                        <Text fontSize="xs" fontWeight="bold">
                          {item.quantity}
                        </Text>
                        <IconButton
                          icon={<FaPlus />}
                          aria-label="Increment"
                          onClick={() => {
                            increment(item.id);
                          }}
                          color="#CED9DF"
                          size="xs"
                          bg="unset"
                          variant="solid"
                        />
                      </HStack>
                      <Button
                        colorScheme="red"
                        size="xs"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </HStack>
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
