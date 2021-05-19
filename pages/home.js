import React, { useState } from 'react';
import { Button, Icon, Flex, SimpleGrid } from '@chakra-ui/react';
import { flexProps } from '../styles/props';
import ImageWithFallback from '../components/imageWithFallback';
import styles from '../styles/home.module.css';
import { IoIosLogIn } from 'react-icons/io';

function Home() {
  return (
    <SimpleGrid columns={[1, 2]} spacing={[0, 10]} bg="gray.200">
      <Flex height={['60vh', '100vh']} {...flexProps}>
        <ImageWithFallback
          src="/undraw.png"
          width={400}
          height={400}
          className={styles.imageWithFallback}
        />
      </Flex>

      <Flex height={['40vh', '100vh']} padding={[0, 8]} {...flexProps}>
        <Icon as={IoIosLogIn} w={['40', 'sm']} h={['40', 'sm']} />
        <Button
          as="a"
          href="/preview"
          bg="#01497c"
          p={8}
          color="white"
          fontSize="xl"
          w={['sm', 'md']}
          _hover={{}}
        >
          Login
        </Button>
      </Flex>
    </SimpleGrid>
  );
}

export default Home;
