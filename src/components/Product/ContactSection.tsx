import {
  Button,
  HStack,
  Heading,
  Stack,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function ContactSection() {
  return (
    <Stack alignItems={"center"} gap={10} py={10} width="full" as="section" id="contact">
      <Heading fontWeight={"bold"} fontSize={{ base: "32px", lg: "40px" }}>
        Contact Us
      </Heading>
      {/* Contact Form */}
      <Stack width={{ base: "full" }} spacing={5}>
        <HStack gap={4} flexDir={{base:"column",md:"row"}}>
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
        </HStack>
        <Textarea placeholder="Your Message" resize="vertical" rows={5} />
      </Stack>
      <Button
        width={{sm:"300px"}}
        mx="auto"
        boxShadow="0 10px 30px #39B54A80"
        variant={"custom"}
      >
        Send Message
      </Button>
    </Stack>
  );
}
