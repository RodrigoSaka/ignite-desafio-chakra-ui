import {
  Box,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Grid,
  Image,
  useBreakpointValue
} from '@chakra-ui/react';
import React from 'react';
import { BannerPage } from '../BannerPage';
import { Header } from '../Header';

export type City = {
  img: string;
  title: string;
  subtitle: string;
  flag: string;
};

export type ContentProps = {
  title: string;
  img: string;
  description: string;
  languageCount: number;
  citiesCount: number;
  citiesSubCount: number;
  cities: City[];
};

export function Content(contentProps: ContentProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Header />
      <BannerPage title={contentProps.title} img={contentProps.img} />
      <Box px={{ base: '4', md: '140' }} pt={{ base: '6', md: '20' }} pb='9'>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '600px' }} textAlign='justify' fontSize='xl' color='gray.800'>
            {contentProps.description}
          </Box>
          <Flex align='center' justify={{ base: 'flex-start', md: 'center' }} flex='1'>
            <Box textAlign={{ base: 'left', md: 'center' }} fontWeight='semibold'>
              <Box fontSize={{ base: 'lg', md: '5xl' }} color='yellow.600'>
                {contentProps.languageCount}
              </Box>
              <Box fontSize={{ base: 'lg', md: '2xl' }} color='gray.800'>
                línguas
              </Box>
            </Box>
            <Box ml='10' textAlign={{ base: 'left', md: 'center' }} fontWeight='semibold'>
              <Box fontSize={{ base: 'lg', md: '5xl' }} color='yellow.600'>
                {contentProps.citiesCount}
              </Box>
              <Flex color='gray.800' align='center'>
                <Box fontSize={{ base: 'lg', md: '2xl' }}>
                  cidades +{contentProps.citiesSubCount}
                </Box>
                <Popover>
                  <PopoverTrigger>
                    <Box cursor='pointer' ml='2' as='span'>
                      <Image src='/assets/icons/info.svg' />
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent fontWeight='normal'>
                    <PopoverArrow />
                    <PopoverHeader fontWeight='bold'>Informação</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>Diversas cidades a sua disposição</PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Box mt='20'>
          <Box color='gray.800' fontSize={{ base: '2xl', md: '4xl' }} mb='10'>
            Cidades +{contentProps.citiesSubCount}
          </Box>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
            gap={{ base: '5', md: '45' }}
            px={{ base: '60px', md: '0' }}
            fontFamily='barlow'
          >
            {contentProps.cities.map((city, index) => (
              <Box key={index}>
                <Image src={city.img} w='100%' />
                <Grid
                  borderWidth='1px'
                  borderColor='yellow.600'
                  p='4'
                  templateAreas={`'title flag' 'subtitle flag'`}
                  gap='3'
                >
                  <Box gridArea='title' fontWeight='semibold' fontSize='xl' color='gray.800'>
                    {city.title}
                  </Box>
                  <Box gridArea='subtitle'>{city.subtitle}</Box>
                  <Image
                    gridArea='flag'
                    justifySelf='center'
                    alignSelf='center'
                    src={city.flag}
                    w='30px'
                  />
                </Grid>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
