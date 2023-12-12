import { Button } from "@chakra-ui/react";
import shopifyClient from "../../../utils/shopifyClient";
import Cart from "../../../types/Cart";
import React from "react";

export default function ProceedToCheckout({ cart }: { cart: Cart[] }) {
    const [loading,setLoading] = React.useState(false)
  const proceedToCheckout = async () => {
      setLoading(true)
    try {
      const checkout = await shopifyClient.checkout.create();

      const lineItemsToAdd = cart.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }));
      const updatedCheckout = await shopifyClient.checkout.addLineItems(
        checkout.id,
        lineItemsToAdd
      );
      localStorage.removeItem("cart")
      // Redirect to Shopify Checkout
      window.location.href = updatedCheckout.webUrl;
    } catch (error) {
      console.error("Error adding to cart: ", error);
    } finally {
        setLoading(false)
    }
  };
  // const productId = "gid://shopify/Product/8920837095710";

  /*
  useEffect(() => {
    // Fetch all variants of a product
    shopifyClient.product
      .fetch(productId)
      .then((product) => {
        // Process the fetched product data with variants
        console.log("Fetched Product with Variants:", product);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);
  */ //Incase if need to check the variant id from product, product id is above just for testing
  return (
    <Button
      mt="2"
      onClick={() => {
        if (cart?.length !== 0) {
          proceedToCheckout();
        }
      }}
      borderRadius={4}
      backgroundColor="brand.500"
      isDisabled={cart?.length == 0}
      isLoading={loading}
      _loading={{
        backgroundColor:"brand.500"
      }}
      colorScheme={"brand"}
    >
      Proceed to Checkout
    </Button>
  );
}
