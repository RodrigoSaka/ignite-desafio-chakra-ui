import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

export function Header() {
  return (
    <Flex as='header' w='100%' align='center' justify='center' h='100px'>
      <Image src='assets/logo.svg' />
    </Flex>
  );
}
