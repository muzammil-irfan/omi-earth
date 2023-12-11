import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import previewImageUrl from "../../assets/Product_page-infographic-4.png";
import playBtnImg from "../../assets/play.png"

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const videoUrl =
    "https://www.youtube.com/embed/6VoSqfQZ_TQ?si=JURSc8FS144DjegN";

  return (
    <Box position="relative" maxW="900px" mx="auto">
      {!isPlaying && (
        <Box
          as="button"
          onClick={playVideo}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          cursor="pointer"
          borderRadius="full"
        >
         <Image src={playBtnImg} />
        </Box>
      )}

      {isPlaying ? (
        <iframe
          width="900px"
          height="500px"
          src={videoUrl}
          title="Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <Image
          src={previewImageUrl}
          alt="Video Preview"
          minW={{ base: "80vw", lg: "900px" }}
          height={{ base: "350px", lg: "500px" }}
          objectFit="cover"
        />
      )}
    </Box>
  );
};

export default VideoPlayer;
