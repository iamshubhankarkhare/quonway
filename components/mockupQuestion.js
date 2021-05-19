import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const MockupQuestion = React.memo(({ question }) => {
  return (
    <Flex justify="center" w="100%" my={[4, 8]}>
      <Text px={4} fontSize={['xl', '3xl']} fontWeight="bold">
        Ques.
      </Text>
      <Text fontSize={['xl', '3xl']} w={['2xs', 'lg']}>
        {question}
      </Text>
    </Flex>
  );
});

export default MockupQuestion;
