import { Box, Flex, HStack, HTMLChakraProps, Image } from '@chakra-ui/react';
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
  return (
    <Box w='100%' px='140px' {...rest}>
      <HStack justifyContent='space-around'>
        {travelItems.map(item => (
          <Flex flexDirection='column' align='center'>
            <Image src={item.icon} w='85px' />
            <Box fontSize='2xl' fontWeight='semibold' color='gray.800' mt='6'>
              {item.text}
            </Box>
          </Flex>
        ))}
      </HStack>
    </Box>
  );
}
