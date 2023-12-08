import { useRef, useEffect } from "react";
import image4 from "../../assets/4.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image5 from "../../assets/5.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./carousel.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, Button, Flex, Image } from "@chakra-ui/react";

export default function Carousel() {
  const mainSwiperRef = useRef<any>(null);
  const thumbsSwiperRef = useRef<any>(null);

  useEffect(() => {
    if (mainSwiperRef.current && thumbsSwiperRef.current) {
      mainSwiperRef.current.controller.control(thumbsSwiperRef.current);
      thumbsSwiperRef.current.controller.control(mainSwiperRef.current);
    }
  }, []);
  return (
    <Box>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Flex
            width="full"
            pos="relative"
            minH={{md:"500px"}}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Button
              bg="#F04E4E"
              _hover={{ bgColor: "#F04E4E" }}
              color="white"
              rounded={20}
              px={5}
              minW="70px"
              mx={2}

              width={{ base: "min-content", md: "unset" }}
              marginTop={{ md: "15%" }}
              boxShadow="0 10px 30px rgba(240, 78, 78, 0.5)"
              pos="relative"
            >
              SALE
            </Button>
            <Image src={image4} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={{
          "300": {
            slidesPerView: 3,
          },
          "700": {
            slidesPerView: 3,
          },
          "900": {
            slidesPerView: 4    ,
          },
        }}
      >
        <SwiperSlide>
          <Box height="125px" overflow={"hidden"} rounded={10}>
          <img  src={image4} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box height="125px" overflow={"hidden"} rounded={10}>
          <img  src={image2} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box height="125px" overflow={"hidden"} rounded={10}>
          <img  src={image3} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box height="125px" overflow={"hidden"} rounded={10}>
          <img  src={image5} />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
