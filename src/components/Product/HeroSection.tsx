import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  HStack,
  StackDivider,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import CommonContainer from "../shared/CommonContainer";
import Rating from "../shared/Rating";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaPinterest,
} from "react-icons/fa";
import Carousel from "./Carousel";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export default function HeroSection() {
  const [subscribe, setSubscribe] = React.useState(true);
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Stack bg={"brand.400"} pb={{base:8,md:16}}>
      <CommonContainer>
        <Header />

        <Flex gap={{ base: 5, md: 10,xl:20, "2xl": 40 }} flexDir={{base:"column",xl:"row"}}>
          <Box width={"full"} maxW={{base:"full",xl:"50%"}}>
            <Carousel />
          </Box>
          <Stack my={5} width={{xl:"50%"}}>
            <Heading fontSize={{ base: "28px", md: "32px",lg:"36px", "2xl": "48px" }} fontWeight="bolder">
              Shilajit
            </Heading>
            <Rating rating={4} totalReviews={3} />
            <Text color="#636363" fontSize={{ "2xl": "18px" }} pr={16}>
              Shilajit Pure Himalayan Organic Resin - Natural Authentic Lab
              Tested Formula for Men, Women - No Heavy Metals - 20 grams of Max
              Strength with 85+ Trace Minerals Golden Grade Shilajit Supplement
            </Text>
            <Stack
              my={8}
              py={5}
              gap={3}
              border="1px solid #D2D2D2"
              rounded={10}
              fontSize="18px"
              divider={<StackDivider />}
            >
              <Flex justifyContent="space-between" gap={5} px={4} flexDir={{base:"column",md:"row"}}>
                <Box
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  bg="white"
                  border="2px solid #B6B8BA"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => {
                    setSubscribe(true);
                  }}
                >
                  <Box
                    w="80%"
                    h="80%"
                    borderRadius="50%"
                    bg={subscribe ? "green.500" : "white"}
                  />
                </Box>
                <Stack flex={2}>
                  <Text fontWeight="bold">Subscribe & Save 10%</Text>
                  <Text>FREE SHIPPING + Cancel anytime</Text>
                  <Text textDecoration={"underline"} fontWeight="bold">
                    YOUR SUBSCRIPTION PERKS +
                  </Text>
                </Stack>
                <HStack alignItems="start">
                  <Text>$69.00</Text>
                  <Text color="#ccc" textDecoration={"line-through"}>
                    $99.99
                  </Text>
                </HStack>
              </Flex>

              <Flex justifyContent="space-between" gap={5} px={4} flexDir={{base:"column",md:"row"}}>
                <Box
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  bg="white"
                  border="2px solid #B6B8BA"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => {
                    setSubscribe(false);
                  }}
                >
                  <Box
                    w="80%"
                    h="80%"
                    borderRadius="50%"
                    bg={!subscribe ? "green.500" : "white"}
                  />
                </Box>
                <Stack flex={2}>
                  <Text>One Time Purchase</Text>
                  <Text>or 4 interest-free payments of $16.75 with sezzle</Text>
                </Stack>
                <Text color="#ccc" >$99.99</Text>
              </Flex>
            </Stack>

            <HStack fontSize={{ base: "22px", md: "28px" }} my={2}>
              <Text
                color="#ccc"
                textDecoration={"line-through"}
                fontSize={{ base: "18px", md: "20px" }}
                fontWeight={600}
              >
                $99.99
              </Text>
              <Text fontWeight={600} color="brand.500" >
                $69.00
              </Text>
            </HStack>

            <HStack gap={{base:3,md:5,lg:10}}>
              <Counter
                count={count}
                increment={increment}
                decrement={decrement}
              />
              <Button variant="custom" w={{ base: "200px", md: "300px",lg:"full" }} >
                ADD TO CART
              </Button>
            </HStack>

            <HStack gap={10} my={4}>
              <Text color="black" fontWeight="bold" fontSize="18px">SHARE:</Text>
              <HStack>
                <IconButton aria-label="Facebook" bg="white" rounded="full">
                  <FaFacebook  color={"#000"} />
                </IconButton>
                <IconButton aria-label="Twitter" bg="white" rounded="full">
                  <FaTwitter  color={"#BBC7CD"} />
                </IconButton>
                <IconButton aria-label="Google Plus" bg="white" rounded="full">
                  <FaGooglePlus  color={"#BBC7CD"} />
                </IconButton>
                <IconButton aria-label="Pinterest" bg="white" rounded="full">
                  <FaPinterest  color={"#BBC7CD"} />
                </IconButton>
              </HStack>
            </HStack>
          </Stack>
        </Flex>
      </CommonContainer>
    </Stack>
  );
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
  return (
    <HStack
      width="140px"

      border="2px solid #ECEEF2"
      borderRadius={40}
      padding={"8px"}
      bg="white"
      justifyContent={"space-evenly"}
    >
      <IconButton
        icon={<FaMinus />}
        aria-label="Decrement"
        onClick={decrement}
        color="#CED9DF"
        size="sm"
        bg="unset"
      />
      <Text fontSize="xl" fontWeight="bold">
        {count}
      </Text>
      <IconButton
        icon={<FaPlus />}
        aria-label="Increment"
        onClick={increment}
        color="#CED9DF"
        size="sm"
        bg="unset"
        variant="solid"
      />
    </HStack>
  );
};
