import {
  Box,
  Flex,
  Grid,
  HStack,
  HTMLChakraProps,
  Image,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react';
import React from 'react';

type TavelItems = {
  icon: string;
  text: string;
};

const travelItems: TavelItems[] = [
  {
    icon: 'assets/icons/cocktail.svg',
    text: 'vida noturna'
  },
  {
    icon: 'assets/icons/surf.svg',
    text: 'praia'
  },
  {
    icon: 'assets/icons/building.svg',
    text: 'moderno'
  },
  {
    icon: 'assets/icons/museum.svg',
    text: 'clássico'
  },
  {
    icon: 'assets/icons/earth.svg',
    text: 'e mais...'
  }
];

export function TravelTypes({ ...rest }: HTMLChakraProps<'div'>) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const calcSpan = index => (travelItems.length - 1 === index ? '2' : '1');

  const justContent = index => {
    const lastIndex = travelItems.length - 1 === index;

    if (lastIndex) return 'center';

    return index % 2 ? 'flex-end' : 'flex-start';
  };

  return (
    <Box w='100%' px={{ base: '50px', md: '140px' }} {...rest}>
      {!isMobile ? (
        <Stack justifyContent='space-around' direction='row'>
          {travelItems.map((item, i) => (
            <Flex flexDirection='column' align='center' key={i}>
              <Image src={item.icon} w='85px' />
              <Box fontSize='2xl' fontWeight='semibold' color='gray.800' mt='6'>
                {item.text}
              </Box>
            </Flex>
          ))}
        </Stack>
      ) : (
        <Grid templateColumns='repeat(2, 1fr)' gap='6'>
          {travelItems.map((item, i) => (
            <Flex
              key={i}
              direction='row'
              align='center'
              gridColumn={`span ${calcSpan(i)}`}
              justifyContent={justContent(i)}
            >
              <Box backgroundColor='yellow.600' w='2' h='2' borderRadius='50%'></Box>
              <Box fontSize='lg' fontWeight='semibold' color='gray.800' ml='2'>
                {item.text}
              </Box>
            </Flex>
          ))}
        </Grid>
      )}
    </Box>
  );
}
