import React, { useState } from 'react';
import { Text, Flex } from '@chakra-ui/react';

function Prelaoder() {
  return (
    <Text
      color="#01497c"
      fontSize={['5xl', '7xl']}
      fontWeight="bolder"
      w={['75%', '60%']}
    >
      We're ready when you are...
    </Text>
  );
}

export default Prelaoder;
