import React from 'react';
import { HStack, Text, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

interface ShareButtonsProps {
  shareUrl: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ shareUrl, title }) => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(title)}`;

  return (
    <HStack gap={10} my={4}>
      <Text color="black" fontWeight="bold" fontSize="18px">
        SHARE:
      </Text>
      <HStack>
        <IconButton
          as="a"
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          bg="white"
          rounded="full"
        >
          <FaFacebook color={"#000"} />
        </IconButton>
        <IconButton
          as="a"
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          bg="white"
          rounded="full"
        >
          <FaTwitter color={"#BBC7CD"} />
        </IconButton>
        <IconButton
          as="a"
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          bg="white"
          rounded="full"
        >
          <FaLinkedin color={"#BBC7CD"} />
        </IconButton>
        <IconButton
          as="a"
          href={pinterestShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          bg="white"
          rounded="full"
        >
          <FaPinterest color={"#BBC7CD"} />
        </IconButton>
      </HStack>
    </HStack>
  );
};

export default ShareButtons;
