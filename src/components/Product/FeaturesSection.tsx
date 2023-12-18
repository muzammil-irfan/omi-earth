import { Flex, Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import InfoImage from "../../assets/webp/Product_page-infographic-3.webp";
import CommonContainer from "../shared/CommonContainer";

export default function FeaturesSection() {
  return (
    <Box position="relative" bg="brand.400" my={10}  as="section" id="features">
      <CommonContainer>
        <Flex
          my={{ base: 5, sm: 10, lg: 20 }}
          gap={{ base: 5, md: 10, xl: 16, "2xl": 20 }}
          bg="brand.400"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Stack w={{ lg: "50%" }} zIndex={1} justifyContent={"center"}>
            <Image src={InfoImage} alt="Features Of Shilajit" />
          </Stack>
          <Box w={{ lg: "50%" }}>
            <Heading
              py={4}
              mb={{sm:2}}
              fontWeight="bold"
              fontSize={{ base: "28px", lg: "32px", xl: "40px" }}
            >
              Key Features
            </Heading>
            {txtArr.map((text, index) => (
              <Text
                fontSize="16px"
                key={index}
                dangerouslySetInnerHTML={{ __html: text }}
                py={{ base: 2, lg: 0, xl: 2 }}
              />
            ))}
          </Box>
        </Flex>
      </CommonContainer>
      <Box
        display={{ base: "none", lg: "block" }}
        bg="brand.500"
        height={{lg:"250px","2xl":"350px"}}
        width="30%"
        position="absolute"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={0}
      />
    </Box>
  );
}
const txtArr = [
  "<b>Boosts Energy :</b> Shilajit is known for its ability to increase energy levels and combat fatigue",
  "<b>Enhances Vitality :</b> It can improve overall vitality and stamina.",
  "<b>Rich in Nutrients :</b> Shilajit contains over 85 trace minerals and fulvic acid, providing essential nutrients for the body.",
  "<b>Supports Cognitive Function :</b> Some studies suggest that Shilajit may enhance cognitive function and memory.",
  "<b>Antioxidant Properties :</b> It possesses antioxidant properties that help protect cells from damage caused by free radicals.",
  "<b>Anti-Inflammatory :</b> Shilajit has anti-inflammatory properties and may help alleviate various inflammatory conditions.",
  "<b>Supports Immune System :</b> It can strengthen the immune system, making the body more resilient to illnesses.",
  "<b>Aids in Digestion :</b> Shilajit may aid in digestion and help with gastrointestinal issues.",
  "<b>Promotes Anti-Aging:</b> It is believed to have anti-aging properties, supporting skin health",
];
