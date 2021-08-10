import { Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

export function Header() {
  return (
    <Flex as='header' w='100%' align='center' justify='center' h={{ base: '50px', md: '100px' }}>
      <Link href='/' cursor='pointer'>
        <Image src='/assets/logo.svg' w={{ base: '80px', md: '185px' }} />
      </Link>
    </Flex>
  );
}
