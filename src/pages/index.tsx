import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes mt='20' />
      <Flex w='100%' my='50px' mt={{ base: '9', md: '20' }} justify='center'>
        <Box borderTop='2px' borderColor='gray.800' w='90px'></Box>
      </Flex>
      <Carousel />
    </>
  );
}
