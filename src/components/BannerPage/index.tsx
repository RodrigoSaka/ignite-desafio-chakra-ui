import { Box, Flex, Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

type BannerPageProps = {
  title: string;
  img: string;
};

export function BannerPage({ img, title }: BannerPageProps) {
  return (
    <Flex
      w='100%'
      h={{ base: '150px', md: '500px' }}
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`}
      backgroundSize='cover'
      alignItems={{ base: 'center', md: 'flex-end' }}
      justifyContent={{ base: 'center', md: 'flex-start' }}
      py='15'
      px='35'
    >
      <Box fontSize={{ base: '2xl', md: '5xl' }} color='white' fontWeight='semibold'>
        {title}
      </Box>
    </Flex>
  );
}
