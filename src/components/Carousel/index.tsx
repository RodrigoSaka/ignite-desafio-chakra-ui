import { Box, Flex, HTMLChakraProps, Link, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './index.module.scss';

SwiperCore.use([Pagination]);

type Travels = {
  title: string;
  subtitle: string;
  img: string;
  url: string;
};

const travels: Travels[] = [
  {
    title: 'América do Norte',
    subtitle: 'Kansas',
    img: 'assets/travels/north-america.jpg',
    url: 'travel/america-norte'
  },
  {
    title: 'América do Sul',
    subtitle: 'orange Direct',
    img: 'assets/travels/south-america.jpg',
    url: 'travel/america-sul'
  },
  {
    title: 'Ásia',
    subtitle: 'Central cross-platform',
    img: 'assets/travels/asia.jpg',
    url: 'travel/asia'
  },
  {
    title: 'África',
    subtitle: 'channels',
    img: 'assets/travels/africa.jpg',
    url: 'travel/africa'
  },
  {
    title: 'Europa',
    subtitle: 'Implemented Representative Trail',
    img: 'assets/travels/europa.jpg',
    url: 'travel/europa'
  },
  {
    title: 'Oceania',
    subtitle: 'Ergonomic',
    img: 'assets/travels/oceania.jpg',
    url: 'travel/oceania'
  }
];

export function Carousel({ ...rest }: HTMLChakraProps<'div'>) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box pb={{ base: '5', md: '10' }} {...rest}>
      <Box fontSize={{ base: 'xl', md: '4xl' }} color='gray.800' textAlign='center' mb='5'>
        Vamos nessa? <br />
        Então escolha seu continente
      </Box>

      <Box px={{ base: '0', md: '100px' }} h='450px'>
        <Swiper
          spaceBetween={50}
          pagination={{
            dynamicBullets: false
          }}
          navigation={true}
          className={styles.carousel}
        >
          {travels.map((travel, index) => (
            <SwiperSlide key={index}>
              <Link href={travel.url} _hover={{}}>
                <Flex
                  h='100%'
                  w='100%'
                  backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${travel.img})`}
                  backgroundSize='cover'
                  direction='column'
                  justify='center'
                  align='center'
                  color='white'
                >
                  <Box fontSize={{ base: '2xl', md: '5xl' }} fontWeight='bold'>
                    {travel.title}
                  </Box>
                  <Box fontSize={{ base: 'sm', md: '2xl' }}>{travel.subtitle}</Box>
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
