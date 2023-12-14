import {
  Flex,
  Box,
  HStack,
  Button,
  Heading,
  Text,
  Stack,
  Image,
  Avatar,
} from "@chakra-ui/react";
import InfoImage from "../../assets/Product_page-infographic-1.png";
import Rating from "../shared/Rating";
import React from "react";
import { BsStarFill } from "react-icons/bs";


export default function DescriptionSection() {
  const [tab, setTab] = React.useState("Description");
  return (
    <Flex
      my={{ base: 10, md: 16 }}
      gap={{ base: 10, lg: 5, xl: 10, "2xl": 16 }}
      px={{ "2xl": 5 }}
      flexDir={{ base: "column", xl: "row" }}
    >
      <Box
        w={{ xl: "60%" }}
        p={{ base:4,sm: 8, lg: 16 }}
        boxShadow="0 10px 90px rgba(0, 0, 0, 0.07)"
      >
        <HStack spacing={4} flexWrap={{ base: "wrap", xl: "unset" }}>
          {tabsData.map((item) => {
            if (item == tab) {
              return (
                <Button
                  variant="custom"
                  boxShadow="0 10px 30px #39B54A80"
                  onClick={() => {
                    setTab(item);
                  }}
                  key={item}
                >
                  {item}
                </Button>
              );
            } else {
              return (
                <Button
                  variant="custom"
                  bg="white"
                  color="#8799A3"
                  _hover={{ background: "white" }}
                  boxShadow="0 10px 30px #C2CACF4D"
                  onClick={() => {
                    setTab(item);
                  }}
                  key={item}
                >
                  {item}
                </Button>
              );
            }
          })}
        </HStack>
        {tab == tabsData[0] && (
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
              Experience the Power of Pure Himalayan Shilajit Gold : Elevate
              Your Health and Vitality Naturally! Discover the ancient secret to
              holistic well-being with our Pure Soft Resin Shilajit sourced from
              the pristine Himalayan Mountains. This remarkable natural
              substance has been revered for centuries in Eastern cultures for
              its transformative benefits on both body and mind.
            </Text>
            <br />

            <Text>
              Himalayan Shilajit is a powerhouse of rejuvenation, known
              worldwide for its ability to boost energy levels and enhance
              overall vitality. Packed with over 85 trace minerals in their
              ionic form and enriched with fulvic acid, it stands as nature's
              ultimate source of personal empowerment.
              <br />
              Shilajit harmonizes your body's systems, providing the necessary
              support to increase or balance your inner energy as needed.
            </Text>
          </Stack>
        )}
        {tab == tabsData[1] && (
          <Stack my={8}>
            <Heading
              pt={4}
              mb={2}
              fontSize={{ base: "18px", md: "22px", "2xl": "28px" }}
              fontWeight={"bold"}
            >
              Additional Information:
            </Heading>
            <Text fontSize="sm">
              "Experience the Power of Pure Himalayan Shilajit Gold : Elevate
              Your Health and Vitality Naturally! Discover the ancient secret to
              holistic well-being with our Pure Soft Resin Shilajit sourced from
              the pristine Himalayan Mountains. This remarkable natural
              substance has been revered for centuries in Eastern cultures for
              its transformative benefits on both body and mind.
            </Text>
            <br />

            <Text>
              Himalayan Shilajit is a powerhouse of rejuvenation, known
              worldwide for its ability to boost energy levels and enhance
              overall vitality. Packed with over 85 trace minerals in their
              ionic form and enriched with fulvic acid, it stands as nature's
              ultimate source of personal empowerment.
              <br />
              Shilajit harmonizes your body's systems, providing the necessary
              support to increase or balance your inner energy as needed.
            </Text>
          </Stack>
        )}

        {tab == tabsData[2] && (
          <Stack my={8} gap={6}>
            {reviews.map((item) => {
              return (
                <Flex gap={4} alignItems="center"  key={item.name}>
                  <Avatar
                    src="/images/gigImage/review.png"
                    size={{ base: "xl" }}
                  />
                  <Stack>
                    <HStack alignItems={"center"} gap={2}>
                      <Text
                        fontSize={{ base: "12px", md: "16px", xl: "19px" }}
                        fontWeight={"medium"}
                      >
                        {item.name}
                      </Text>
                      <Flex
                        color={"#ffbe5b"}
                        gap={1}
                        alignItems="center"
                        fontSize={{ base: "12px", xl: "16px" }}
                      >
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <Text>5</Text>
                      </Flex>
                    </HStack>
                    <Text
                      fontWeight={"semibold"}
                      color="gray.500"
                      fontSize={{ base: "13px", xl: "16px" }}
                    >
                      {item.content}
                    </Text>
                  </Stack>
                </Flex>
              );
            })}
          </Stack>
        )}
      </Box>
      <Box
        w={{ xl: "30%" }}
        p={5}
        boxShadow="0 10px 90px rgba(0, 0, 0, 0.07)"
        pos="relative"
        bg="#F9F9FB"
        maxW={{ xl: "320px" }}
        height="fit-content"
      >
        <Image src={InfoImage} width={{ base: "100%", xl: "unset" }} pr={3} />
        <Flex justify={"space-between"} my={5} flexDir={{ base: "row" }}>
          <Stack>
            <Rating rating={5} />
            <Heading
              fontSize={{ base: "18px", md: "22px", lg: "27px" }}
              fontWeight="bold"
            >
              Grade A Shilajit
            </Heading>
            {/* <Flex gap={3}>
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
            </Flex> */}
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
const tabsData = ["Description", "Additional Information", "Reviews (3)"];
const reviews = [
  { name: "Sarah J.", content: "Himalayan Shilajit Gold has become my daily wellness secret! I've noticed a significant boost in my energy levels, and it keeps me going throughout the day. The purity of this product is evident, and I appreciate the authenticity that comes with sourcing it from the Himalayas. Highly recommended for anyone looking to enhance their vitality naturally." },
  { name: "John M.", content: "I've been using Shilajit Gold for a few weeks now, and I can feel the difference. My focus has improved, and I no longer experience that midday slump. It's impressive how a natural supplement can make such a positive impact. The fact that it's packed with essential minerals is a big plus for me."},
  { name: "Lisa H.", content: "As someone who leads a hectic lifestyle, Shilajit Gold has been a game-changer. The mental clarity it provides is exactly what I needed. I feel more centered, focused, and energized. Plus, knowing it comes from the Himalayas adds that extra layer of authenticity for me. Definitely a must-try" },
];
