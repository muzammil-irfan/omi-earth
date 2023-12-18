import { useRef, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import previewImageUrl from "../../assets/webp/Product_page-infographic-4.webp";
import playBtnImg from "../../assets/webp/play.webp";
import videoSrc from "../../assets/video.mp4";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box position="relative"mx="auto"maxW="900px">
      <Box
        as="button"
        onClick={playPauseVideo}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        cursor="pointer"
        borderRadius="full"
        pointerEvents="auto" // Set pointerEvents to "auto"
        zIndex={1}
        title="Play"
      >
        <Image
          src={playBtnImg}
          maxW={{base:"40px",sm:"60px",lg:"unset"}}
          visibility={!isPlaying ? "visible" : "hidden"}
          alt="Shilajit Benefits"
        />
      </Box>
      <Box
        as="video"
        ref={videoRef}
        minW={{base:"80vw",lg:"900px"}}
        height={{base:"250px",sm:"350px",lg:"500px"}}
        maxW={{base:"80vw",lg:"900px"}}  // Set max width for larger screens
        mx="auto"     // Center the video horizontally
        poster={previewImageUrl}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
};

export default VideoPlayer;
