import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import previewImageUrl from "../../assets/video.png";
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
          bg="white"
          p={4}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FFA500" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.431 20L17.056 27.0875V12.9125L28.431 20Z"
              fill="white"
            />
          </svg>
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
          minW={{base:"80vw",lg:"900px"}}
          height={{base:"350px",lg:"500px"}}
          objectFit="cover"
        />
      )}
    </Box>
  );
};

export default VideoPlayer;
