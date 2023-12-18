import { Flex, Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import InfoImage from "../../assets/Product_page-infographic-2.png";
import CommonContainer from "../shared/CommonContainer";

export default function FeaturesSection() {
  return (
    <CommonContainer  >
      <Flex
        my={{base:10,lg:20}}
        px={{xl:5}}
        gap={{ base: 10, xl:28 }}
        flexDir={{ base: "column-reverse", lg: "row" }}
        id="why-shilajit"
        as="section"
      >
        <Stack w={{ lg: "50%" }}>
          <Text color="brand.500" mb={1} fontWeight="medium" fontSize="17px">
            #Shop the look
          </Text>
          <Heading
            pb={2}
            // mb={2}
            fontSize={{ base: "28px", lg: "32px", "xl": "40px" }}
          >
            Why Shilajit?
          </Heading>
          {txtArr.map((item) => {
            return (
              <Text key={item} my={2} fontSize={{lg:"14px",xl:"16px"}}>
                {item}
              </Text>
            );
          })}
          {/* <Box py={6}>
            <Button variant="custom" fontWeight="400" onClick={scrollToTop}>
              ADD TO CART
            </Button>
          </Box> */}
        </Stack>
        <Box w={{ lg: "50%" }} zIndex={1}>
          <Image src={InfoImage} w="full" alt="Why Shilajit" />
        </Box>
      </Flex>
    </CommonContainer>
  );
}
const txtArr = [
  "Shilajit is the ultimate fulvic acid plus trace mineral food supplement. Our bodies require minerals as essential building blocks for proper cellular function, and Shilajit delivers them in their most natural form. Unlike concentrates, mixes, or synthesized products, Shilajit is 100% naturally harvested over millions of years, allowing fulvic acid to form complex molecular bonds with minerals and metals. This unique natural process sets it apart from other mineral supplements.",
  "Soft Himalayan Shilajit: The Freshest Form Our Soft Himalayan Shilajit is the freshest form available, packed right after extraction. It retains its original molecular properties and is not dried or processed like other Shilajit varieties, preserving its potency.",
  "Experience Immediate Benefits Customers often report feeling the effects of Shilajit shortly after the first use. It provides a burst of energy and revitalizes the body, earning its reputation as the most potent superfood for inner rejuvenation in Ancient Ayurveda and Rasayana practices.",
];
