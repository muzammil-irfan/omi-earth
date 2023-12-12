import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import CommonContainer from "../shared/CommonContainer";
import VideoPlayer from "./VideoPlayer";

export default function SupportSection() {
  return (
    <Box bg="black" pos="relative" mt={20}>
      <CommonContainer>
        <Stack alignItems={"center"} gap={4} pb={10} color="white">
          <Box
            height={{ base: "30vw", sm: "35vw", md: "250px", lg: "400px" }}
          />
          <Text color="#F76954">vlog</Text>
          <Heading color="white" fontSize={{ base: "2xl", sm: "4xl" }}>
            Supports Heart Health
          </Heading>
          <Box textAlign="center" maxW="900px" >
            <Text>
              Some research suggests that it may have cardiovascular benefits.
            </Text>
            <Text>
              Please note that individual responses to Shilajit can vary, and
              it's important to consult with a healthcare professional before
              adding it to your routine, especially if you have underlying
              health conditions or are taking medications.
            </Text>
          </Box>
          <Button width={{ base: "200px" }} p={8} mt={4} variant={"custom"}>
            Order Now
          </Button>
        </Stack>
        <Flex pos="absolute" top="-20" left="50%" transform="translateX(-50%)">
          <VideoPlayer />
        </Flex>
      </CommonContainer>
    </Box>
  );
}
