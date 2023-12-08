import React, { useRef, useEffect } from "react";
import image1 from "../../assets/1.png";
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
              bg="red"
              _hover={{ bgColor: "red" }}
              color="white"
              rounded={20}
              px={5}
              mx={4}
              width={{ base: "min-content", md: "unset" }}
              marginTop={{ md: "15%" }}
              boxShadow="0 10px 30px rgba(240, 78, 78, 0.5)"
              pos="relative"
            >
              Sale
            </Button>
            <Image src={image1} />
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
          <img src={image1} />
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
    </Box>
  );
}
