import React, { useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

function Poll({ polls }) {
  console.log(polls);
  return (
    <Stack>
      <Radio size="lg" name="1" colorScheme="orange" defaultChecked>
        Radio
      </Radio>
    </Stack>
  );
}

export default Poll;
