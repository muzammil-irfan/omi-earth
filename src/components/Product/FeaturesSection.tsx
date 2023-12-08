import { Flex, Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import InfoImage from "../../assets/4.png";
import CommonContainer from "../shared/CommonContainer";

export default function FeaturesSection() {
  return (
    <Box position="relative" bg="brand.400" my={10}>
      <CommonContainer>
        <Flex my={10} gap={{ base: 10, lg: 20 }} px={5} bg="brand.400" >
          <Stack w="40%" zIndex={1} justifyContent={"center"}>
            <Image src={InfoImage} />
          </Stack>
          <Box w="60%">
            <Heading
              py={4}
              mb={2}
              fontWeight="bold"
              fontSize={{ base: "18px", md: "22px", "2xl": "28px" }}
            >
              Key Features
            </Heading>
            {txtArr.map((text, index) => (
              <Text
                key={index}
                dangerouslySetInnerHTML={{ __html: text }}
                py={2}
              />
            ))}
          </Box>
        </Flex>
      </CommonContainer>
      <Box
        bg="brand.500"
        height="350px"
        width="30%"
        position="absolute"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={0}
      >
        {/* Content of the absolutely positioned Box */}
      </Box>
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
  "<b>Enhances Vitality :</b> It can improve overall vitality and stamina.",
];
