import { Box, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

export function Banner() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box w='100%' pb='8'>
      <Flex
        w='100%'
        px={{ base: '16px', md: '140px' }}
        py={{ base: '28px', md: '80px' }}
        backgroundImage='assets/banner/bg.png'
        backgroundSize='cover'
        justifyContent='space-between'
        h={{ base: '', md: '335px' }}
      >
        <Box>
          <Box color='white.900' fontSize={{ base: '20px', md: '4xl' }}>
            5 Continentes, <br />
            infinitas possibilidades.
          </Box>
          <Box fontSize={{ base: '14px', md: 'xl' }} mt='5'>
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Box>
        </Box>
        {!isMobile && (
          <Image h='270px' src='assets/banner/airplane.svg' position='relative' top='5' />
        )}
      </Flex>
    </Box>
  );
}
