import { useRef, useEffect, useState } from "react";
import image1 from "../../assets/product-tab-img-1.jpg";
import image2 from "../../assets/product-tab-img-2.jpg";
import image3 from "../../assets/product-tab-img-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./carousel.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, Flex, Image } from "@chakra-ui/react";
const images = [image1, image2, image3];
export default function Carousel() {
  const [rerender, setRerender] = useState(false); //Just to rerender the carousel to make both swipers sync with each other using below ref.
  const thumbsSwiperRef = useRef<any>(null);

  useEffect(() => {
    setRerender(rerender ? true : true); //mention to not get error of unused at build time
  }, []);

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Flex
                width="full"
                pos="relative"
                minH={{ md: "500px" }}
                flexDirection={{ base: "column", md: "row" }}
                // width="fit-content"
              >
                {/* <Button
                  bg="#F04E4E"
                  _hover={{ bgColor: "#F04E4E" }}
                  color="white"
                  rounded={20}
                  px={5}
                  minW="70px"
                  mx={{ md: 2 }}
                  width={{ base: "min-content", md: "unset" }}
                  marginTop={{ md: "15%" }}
                  boxShadow="0 10px 30px rgba(240, 78, 78, 0.5)"
                  pos={{ base: "absolute", md: "relative" }}
                >
                  SALE
                </Button> */}
                <Image
                  src={img}
                  alt={"Omiearth 100% Pure Himalayan Shilajit Gold Organic Soft Resin Enriched with Fulvic Acid"}
                  //maxWidth={{ md: "90%" }}
                />
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        ref={thumbsSwiperRef}
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={images.length > 4 ? 4 : images.length}
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
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Box height="125px" overflow={"hidden"} rounded={10}>
                <img src={img} alt={"Omiearth 100% Pure Himalayan Shilajit Gold Organic Soft Resin Enriched with Fulvic Acid"} />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
