import {
  Flex,
  Box,
  HStack,
  Button,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import InfoImage from "../../assets/shilajit-info.png";
import Rating from "../shared/Rating";

export default function DescriptionSection() {
  return (
    <Flex
      my={{ base: 10, md: 16 }}
      gap={{ base: 10, lg: 5, xl: 20 }}
      px={{ xl: 5 }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Box
        w={{ lg: "70%", xl: "60%" }}
        p={{ base: 8, lg: 16 }}
        boxShadow="0 10px 90px rgba(0, 0, 0, 0.07)"
      >
        <HStack spacing={4} flexWrap={"wrap"}>
          <Button variant="custom" boxShadow="0 10px 30px #39B54A80">
            Description
          </Button>
          <Button
            variant="custom"
            bg="white"
            color="#8799A3"
            _hover={{ background: "white" }}
            boxShadow="0 10px 30px #C2CACF4D"
          >
            Additional Information
          </Button>
          <Button
            variant="custom"
            bg="white"
            color="#8799A3"
            boxShadow="0 10px 30px #C2CACF4D"
            _hover={{ background: "white" }}
          >
            Reviews (3)
          </Button>
        </HStack>
        <Stack my={8}>
          <Heading
            pt={4}
            mb={2}
            fontSize={{ base: "18px", md: "22px", "2xl": "28px" }}
            fontWeight={"bold"}
          >
            Description:
          </Heading>
          <Text fontSize="sm">
            "Experience the Power of Pure Himalayan Shilajit Gold : Elevate Your
            Health and Vitality Naturally! Discover the ancient secret to
            holistic well-being with our Pure Soft Resin Shilajit sourced from
            the pristine Himalayan Mountains. This remarkable natural substance
            has been revered for centuries in Eastern cultures for its
            transformative benefits on both body and mind.
          </Text>
          <br />

          <Text>
            Himalayan Shilajit is a powerhouse of rejuvenation, known worldwide
            for its ability to boost energy levels and enhance overall vitality.
            Packed with over 85 trace minerals in their ionic form and enriched
            with fulvic acid, it stands as nature's ultimate source of personal
            empowerment.
            <br />
            Shilajit harmonizes your body's systems, providing the necessary
            support to increase or balance your inner energy as needed.
          </Text>
        </Stack>
      </Box>
      <Box
        w={{ lg: "30%" }}
        p={5}
        boxShadow="0 10px 90px rgba(0, 0, 0, 0.07)"
        pos="relative"
        bg="#F9F9FB"
        maxW={{ xl: "320px" }}
        height="fit-content"
      >
        <Image src={InfoImage} width={{ base: "100%", lg: "unset" }} pr={3} />
        <Flex justify={"space-between"} my={5} flexDir={{ base: "row" }}>
          <Stack>
            <Rating rating={5} />
            <Heading
              fontSize={{ base: "18px", md: "22px", lg: "27px" }}
              fontWeight="bold"
            >
              Grade A Shilajit
            </Heading>
            <Flex gap={3}>
              <HStack gap={3}>
                <Text
                  // fontWeight={500}
                  color="brand.500"
                  fontSize="20px"
                  fontWeight="bold"
                >
                  $69.00
                </Text>
              </HStack>
            </Flex>
          </Stack>
          <Box mt={{ base: 3, xl: 0 }} pos="absolute" top={"15%"} right={"0"}>
            <Button
              bg="brand.500"
              _hover={{ bgColor: "brand.500" }}
              rounded={30}
              boxShadow="0 10px 40px #39B54A"
              color="white"
              size="sm"
              px={4}
            >
              New
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
