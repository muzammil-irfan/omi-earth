
import React from 'react';
import { Box,  HStack, Icon, Link, Text } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface RatingProps {
  rating: number;
  totalReviews?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, totalReviews }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => <Icon key={index} as={AiFillStar} color="#FCD846" />);
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => <Icon key={index} as={AiOutlineStar} color="#FCD846" />);

  return (
    <HStack >
      <Box mr={2}>{filledStars}{emptyStars}</Box>
      {
          totalReviews &&
      <Link href="#">
      <Text color="#0684FF"fontWeight="bold">{`Read ${totalReviews} reviews`}</Text>
      </Link>
      }
    </HStack>
  );
};

export default Rating;
