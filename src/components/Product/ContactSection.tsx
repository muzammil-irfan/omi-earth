import {
  Button,
  HStack,
  Heading,
  Stack,
  Input,
  Textarea,
  useToast,
  FormControl,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null); // Explicitly define the type of formRef
  const toast = useToast(); // Initialize useToast hook

  // Access environment variables in Vite
  const emailjsServiceId = "service_ewc642n";
  const emailjsTemplateId = "template_dreisbb";
  const publicKey = "f6K-WwcipDjNeSwai";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fromName = e.target.elements[0].value;
    const fromEmail = e.target.elements[1].value;
    const message = e.target.elements[2].value;

    if (!(fromName && fromEmail && message)) {
      toast({
        title: "Empty Form",
        description: "Please fill up the form correctly",
        status: "error",
        isClosable: true,
      });
      return;
    }
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          emailjsServiceId,
          emailjsTemplateId,
          formRef.current,
          publicKey
        );

        // Display success toast
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          status: "success",
          isClosable: true,
        });

        // Reset the form after successful submission
        formRef.current.reset();
      } else {
        toast({
          title: "Empty Form",
          description: "Please fill up the form correctly",
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);

      // Display error toast
      toast({
        title: "Error",
        description:
          "An error occurred while sending the message. Please try again later.",
        status: "error",
        // duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      alignItems={"center"}
      gap={10}
      py={10}
      width="full"
      id="contact"
      as="form"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Heading fontWeight={"bold"} fontSize={{ base: "32px", lg: "40px" }}>
        Contact Us
      </Heading>
      {/* Contact Form */}
      <Stack width={{ base: "full" }} spacing={5}>
        <HStack gap={4} flexDir={{ base: "column", md: "row" }}>
          <FormControl isRequired={true}>
            <Input placeholder="Your Name" name="name" />
          </FormControl>
          <FormControl isRequired={true}>
            <Input type="email" name="email" placeholder="Your Email" />
          </FormControl>
        </HStack>
        <FormControl isRequired={true}>
          <Textarea
            placeholder="Your Message"
            resize="vertical"
            name="message"
            rows={5}
          />
        </FormControl>
      </Stack>
      <Button
        width={{ sm: "300px" }}
        mx="auto"
        boxShadow="0 10px 30px #39B54A80"
        variant={"custom"}
        type="submit"
      >
        Send Message
      </Button>
    </Stack>
  );
}
