import Product from "../types/Product";

const productsData:Product[] = [
  {
    id: "pack1",
    variantId: "gid://shopify/ProductVariant/44605469131007",
    title: "Pack of 1",
    description: "Free Shipping",
    price: "$49.00",
  },
  // {
  //   id: "pack2",
  //   variantId: "gid://shopify/ProductVariant/44605469163775",
  //   title: "Pack of 2",
  //   description: "Free Shipping + Save 10%",
  //   price: "$85.00",
  //   originalPrice: "$98.00",
  // },
  {
    id: "pack3",
    variantId: "gid://shopify/ProductVariant/44605469196543",
    title: "Pack of 3",
    description: "Free Shipping + Save 15%",
    price: "$125.00",
    originalPrice: "$147.00",
  },
  {
    id: "pack5",
    variantId: "gid://shopify/ProductVariant/44605469229311",
    title: "Pack of 5",
    description: "Free Shipping + Save 20%",
    price: "$196.00",
    originalPrice: "$245.00",
  },
  // {
  //   id: "pack10",
  //   variantId: "gid://shopify/ProductVariant/44605469262079",
  //   title: "Pack of 10",
  //   description: "Free Shipping + Save 25%",
  //   price: "$337.00",
  //   originalPrice: "$490.00",
  // },
];

export default productsData;
