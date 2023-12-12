import { HStack, IconButton, Image, Link, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";

interface HeaderProps {
  onOpen: () => void;
  cartCount: number;
}

export default function Header({ onOpen, cartCount }: HeaderProps) {
  const handleCart = () => {
    onOpen();
  };
  return (
    <HStack
      justifyContent={"space-between"}
      borderBottom={"2px solid #F8E2FD"}
      py={{base:4,sm:8}}
      mb={2}
      
    >
      <Image src={Logo} maxW={{base:"120px",sm:"100%"}} />

      <HStack
        justifyContent={{ base: "end", xl: "space-between" }}
        gap={20}
        flex={2}
        maxW={{ base: "90%", md: "850px", "2xl": "950px" }}
        
        
      >
        <HStack
          justifyContent={{ base: "end", xl: "space-between" }}
          maxW={{ xl: "700px", "2xl": "50vw" }}
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
          <IconButton aria-label="cart" variant="unstyled" onClick={handleCart}>
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
                {cartCount && (
                  <>
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
                      data-name={cartCount}
                      transform="translate(1512 54)"
                      fill="#fff"
                      fontSize="13"
                      fontFamily="SegoeUI, Segoe UI"
                    >
                      <tspan x="-3.504" y="0">
                        {cartCount}
                      </tspan>
                    </text>
                  </>
                )}
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
  { href: "#", label: "Contact" },
];
