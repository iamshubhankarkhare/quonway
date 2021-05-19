import React, { useState } from 'react';
import {
  Text,
  Button,
  Flex,
  Box,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

const Poll = React.memo(({ polls, deletePoll, isDeletePoll }) => {
  const [value, setValue] = useState(polls[0]);
  const RadioPolls = ({ polls }) => (
    <RadioGroup onChange={setValue} value={value}>
      <Stack>
        {polls.map((poll, i) => (
          <Radio
            key={i}
            size="lg"
            name="question"
            colorScheme="teal"
            value={poll}
            borderColor="blue.500"
          >
            <Text fontSize="2xl">{poll}</Text>
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );

  const RemovePolls = ({ polls }) => {
    return (
      <>
        {polls.map((poll, id) => (
          <Flex
            className="glassmorphism"
            key={id}
            color="white"
            p={2}
            w={['sm', 'md']}
            borderRadius="10px"
            fontSize={['md', 'xl']}
            justify="space-between"
            align="center"
            my="4"
          >
            {poll}
            <Button bg="none" fontSize="xl" onClick={(e) => deletePoll(poll)}>
              X
            </Button>
          </Flex>
        ))}
      </>
    );
  };
  return (
    <>
      {isDeletePoll ? (
        <RemovePolls polls={polls} />
      ) : (
        <RadioPolls polls={polls} />
      )}
    </>
  );
});
export default Poll;
