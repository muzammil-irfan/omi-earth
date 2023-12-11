import Client from "shopify-buy";

const shopifyClient = Client.buildClient({
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
  domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  apiVersion: "2023-10",
});

export default shopifyClient;
