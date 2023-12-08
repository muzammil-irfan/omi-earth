import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function OurMission() {
  return (
    <Flex my={{ base: 10, lg: 12 }} justifyContent={"space-between"} flexDir={{base:"column",lg:"row"}}>
      <Stack gap={5} width={{ lg:"40%",xl: "30%" }}>
        <Heading fontSize={{base:"28px",md:"32px",lg:"40px"}} fontWeight={500}>Our mission</Heading>
        <Text color="#636363">
          Omiearth is a holistic supplements brand that wants to bring you the
          most value we can, in both our products, and from our own research.
        </Text>
      </Stack>
      {/* Subscribe Box */}
      <Stack bg="white"  py={2} mt={{base:5,lg:0}} pr={1} width={{ lg:"40%",xl: "30%" }} gap={5} >
        <Text fontSize="20px" fontWeight={"medium"} color="black" >
          Subscribe to our emails
        </Text>
        <Flex bg="#39B54A19">
          <Input placeholder="Your email" border={0} />
          <Button colorScheme="brand" px={8} rounded={0}>
            Subscribe
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
