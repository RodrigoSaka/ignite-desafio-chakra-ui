import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export function Banner() {
  return (
    <Box w='100%' pb='8'>
      <Flex
        w='100%'
        px='140px'
        py='80px'
        backgroundImage='assets/banner/bg.png'
        backgroundSize='cover'
        justifyContent='space-between'
        h='335px'
      >
        <Box>
          <Box color='white.900' fontSize='4xl'>
            5 Continentes, <br />
            infinitas possibilidades.
          </Box>
          <Box fontSize='xl' mt='5'>
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Box>
        </Box>
        <Image h='270px' src='assets/banner/airplane.svg' position='relative' top='5' />
      </Flex>
    </Box>
  );
}
