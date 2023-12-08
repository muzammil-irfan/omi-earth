import { HStack, IconButton, Image, Link, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <HStack
      justifyContent={"space-between"}
      borderBottom={"2px solid #F8E2FD"}
      py={8}
      mb={2}
    >
      <Image src={Logo} />

      <HStack
        justifyContent={{ base: "end", xl: "space-between" }}
        gap={20}
        flex={2}
        maxW={{ base: "90%", md: "850px", "2xl": "950px" }}
        mt={{ base: 4, md: 0 }}
      >
        <HStack
          justifyContent={{ base: "end", xl: "space-between" }}
          maxW={{xl:"700px","2xl":"50vw"}}
          flex={2}
          display={{ base: "none", xl: "flex" }}
        >
          {menuItems.map((item) => (
            <Link key={item.label}>
              <Text
                fontSize={{ base: "16px", md: "21px" }}
                fontWeight={"semibold"}
                color="black"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </HStack>

        <HStack>
          <IconButton aria-label="cart" variant="unstyled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30.002"
              viewBox="0 0 26 30.002"
            >
              <g id="Cart" transform="translate(-1493 -39.998)">
                <path
                  id="icon"
                  d="M1510.015,45.247h-3.493v-.875a4.479,4.479,0,0,0-8.955,0v4.375h1.791V47h3.582v-1.75h-3.582v-.875a2.687,2.687,0,0,1,5.373,0v4.375h1.791V47h1.88l.806,12.25H1494.97l.716-12.25h.089v-1.75h-1.7L1493,61h18Z"
                />
                <rect
                  id="Shape_1"
                  data-name="Shape 1"
                  width="18"
                  height="2"
                  transform="translate(1493 68)"
                />
                <circle
                  id="circle"
                  cx="7.5"
                  cy="7.5"
                  r="7.5"
                  transform="translate(1504 43)"
                  fill="#8799a3"
                />
                <text
                  id="_3"
                  data-name="3"
                  transform="translate(1512 54)"
                  fill="#fff"
                  fontSize="13"
                  fontFamily="SegoeUI, Segoe UI"
                >
                  <tspan x="-3.504" y="0">
                    3
                  </tspan>
                </text>
              </g>
            </svg>
          </IconButton>
          <IconButton aria-label="search" variant="unstyled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="30.002"
              viewBox="0 0 21 30.002"
            >
              <g id="Search" transform="translate(-1532 -39.998)">
                <rect
                  id="Shape_1_copy"
                  data-name="Shape 1 copy"
                  width="18"
                  height="2"
                  transform="translate(1535 68)"
                />
                <path
                  id="icon"
                  d="M1547.152,60.039l-1.664-1.655a9.241,9.241,0,0,1-3.854.784,9.585,9.585,0,1,1,9.547-9.585,9.384,9.384,0,0,1-.788,3.833l1.664,1.657a3.515,3.515,0,0,1-.088,4.879,3.664,3.664,0,0,1-2.54,1.046A3.344,3.344,0,0,1,1547.152,60.039Zm-.087-2.615,1.313,1.308a1.677,1.677,0,0,0,2.365-.087,1.655,1.655,0,0,0,.087-2.353l-1.314-1.307A9.306,9.306,0,0,1,1547.065,57.424Zm-11.036-13.418a7.936,7.936,0,1,0,5.605-2.265A7.9,7.9,0,0,0,1536.029,44.006Zm.35,4.966a.773.773,0,0,1-.613-1.046,6.07,6.07,0,0,1,2.89-3.659,6.138,6.138,0,0,1,4.642-.523.883.883,0,0,1,.7,1.046.832.832,0,0,1-1.051.609,4.359,4.359,0,0,0-5.431,2.963,1.053,1.053,0,0,1-.876.61Z"
                />
              </g>
            </svg>
          </IconButton>
        </HStack>
      </HStack>
    </HStack>
  );
}

const menuItems = [
  { href: "#", label: "Shilajit" },
  { href: "#", label: "Service Quality" },
  { href: "#", label: "Key Features" },
  { href: "#", label: "Why Shilajit?" },
  { href: "#", label: "Contact" }
];
