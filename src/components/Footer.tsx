import {
  Flex,
  Box,
  Text,
  Link,
  IconButton,
  Input,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import bgImage from "../assets/background.png";
import {
  FaFacebook,
  FaGooglePlus,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import CommonContainer from "./shared/CommonContainer";
import { CiLocationOn } from "react-icons/ci";


const usefulLinks = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "News",
    href: "/",
  },
  {
    label: "Partners",
    href: "/",
  },
  {
    label: "Room Details",
    href: "/",
  },
  {
    label: "Gallery",
    href: "/",
  },
  {
    label: "Contacts",
    href: "/",
  },
];

const helpLinks = [
  {
    label: "FAQ",
    href: "/",
  },
  {
    label: "Term & conditions",
    href: "/",
  },
  {
    label: "Reporting",
    href: "/",
  },
  {
    label: "Documentation",
    href: "/",
  },
  {
    label: "Support Policy",
    href: "/",
  },
  {
    label: "Privacy",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer>
      <Box bgImage={bgImage} bgSize="cover" py={{base:10,lg:20}} pb={{lg:40}} color="white">
        <CommonContainer>
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 4 }}
            mx="auto"
            gap={{ base: 5, md: 10 }}
          >
            {/* About Us */}
            <Stack>
              <Heading fontWeight="bold" color="white" fontSize="xl" mb={4}>
                About Us
              </Heading>
              <Text>
                orporate clients and leisure travelers has been relying on
                Groundlink for dependable safe, and professional chauffeured car
                service in major cities across World. Indeed it has been more
                than one decade and five years that Groundlink
              </Text>
              {/* Social Links */}
              <HStack mt={5}>
                <IconButton aria-label="Facebook" bg="white" rounded="full">
                  <FaFacebook color={"#BBC7CD"} />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  bgColor="brand.500"
                  rounded="full"
                  _hover={{ bgColor: "brand.500" }}
                >
                  <FaTwitter color={"#BBC7CD"} />
                </IconButton>
                <IconButton aria-label="Google Plus" bg="white" rounded="full">
                  <FaGooglePlus color={"#BBC7CD"} />
                </IconButton>
                <IconButton aria-label="Pinterest" bg="white" rounded="full">
                  <FaPinterest color={"#BBC7CD"} />
                </IconButton>
              </HStack>
            </Stack>

            {/* Useful Links */}
            <Stack>
              <Heading fontWeight="bold" color="white" fontSize="xl" mb={4}>
                Useful Links
              </Heading>
              <Stack >
                {usefulLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    _hover={{ color: "brand.500" }}
                  >
                    <Text>{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Help */}
            <Stack>
              <Heading fontWeight="bold" color="white" fontSize="xl" mb={4}>
                Help?
              </Heading>
              <Stack>
                {helpLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    _hover={{ color: "brand.500" }}
                  >
                    <Text>{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Contact */}
            <Stack>
              <Heading fontWeight="bold" color="white" fontSize="xl" mb={4}>
                Contact
              </Heading>
              <Text>
                We are a team of designers and developers create high quality
                Magento, Prestas
              </Text>
              <HStack gap={5} my={4}>
                <CiLocationOn />

                <Text>254 Lillian Blvd, Holbrook</Text>
              </HStack>
              {/* Subscribe Box */}
              <Box bg="white" maxW="800px" mx="auto" py={2} pr={1}>
                <Flex>
                  <Input placeholder="Your email" border={0} />
                  <Button colorScheme="brand" px={8} rounded={0}>
                    Subscribe
                  </Button>
                </Flex>
              </Box>
            </Stack>
          </SimpleGrid>
        </CommonContainer>
      </Box>
      <Box bgColor={"blackAlpha.800"} bgSize="cover" py={2} color="white">
        <CommonContainer>
          <HStack p={2} bg="">
            <Text>© Omiearth all right reserved</Text>
          </HStack>
        </CommonContainer>
      </Box>
    </footer>
  );
};

export default Footer;
