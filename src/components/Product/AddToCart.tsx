import { Button } from "@chakra-ui/react";
import shopifyClient from "../../utils/shopifyClient";

interface CartProps {
  quantity: number;
  variantId: string;
}

export default function AddToCart({ quantity, variantId }: CartProps) {
  // const productId = "gid://shopify/Product/8920837095710";

  const handleClick = async () => {
    try {
      const checkout = await shopifyClient.checkout.create();

      // Add the single product to the checkout
      const lineItemsToAdd = [{ variantId, quantity }];
      const updatedCheckout = await shopifyClient.checkout.addLineItems(
        checkout.id,
        lineItemsToAdd
      );

      // Redirect to Shopify Checkout
        window.location.href = updatedCheckout.webUrl;
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };
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
      variant="custom"
      w={{ base: "200px", md: "300px", lg: "full" }}
      onClick={handleClick}
    >
      ADD TO CART
    </Button>
  );
}
