import React, { useState } from 'react';
import {
  Heading,
  Button,
  Flex,
  Input,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import ImageWithFallback from '../components/imageWithFallback';
import Poll from '../components/poll';
import InputHeading from '../components/inputHeading';
import MockupQuestion from '../components/mockupQuestion';
import Preloader from '../components/prelaoder';
import { flexProps, inputProps } from '../styles/props';
import {
  handleChange,
  handleUrlOnKeyPress,
  handlePollOnKeyPress,
  deletePoll,
} from '../components/helpers';

function preview() {
  const fallbackImg = '/undraw.png';
  const [question, setQuestion] = useState('');
  const [url, setUrl] = useState('');
  const [src, setSrc] = useState(fallbackImg);
  // statesfor polling
  const [newPoll, setNewPoll] = useState(''); //new poll in input box
  const [polls, setPolls] = useState([]); //all polls

  const deletePoll = (poll) => {
    const filteredArray = polls.filter((p) => p !== poll);
    setPolls(filteredArray);
  };
  return (
    <SimpleGrid columns={[1, 2]} spacing={[0, 10]} bg="gray.200">
      {/* left section */}
      <Flex
        height={['60vh', '100vh']}
        {...flexProps}
        justify={['center', 'flex-start']}
        py={[8, 20]}
      >
        {src === fallbackImg && question === '' && polls.length === 0 ? (
          <Preloader />
        ) : (
          <>
            <ImageWithFallback src={src} width={300} height={300} />
            <MockupQuestion question={question} />
            <Box w="80%" px={[4, 12]}>
              {/* polls with radio buttons */}
              <Poll polls={polls} deletePoll={deletePoll} />
            </Box>
          </>
        )}
      </Flex>
      {/* right section */}
      <Flex
        height={['40vh', '100vh']}
        {...flexProps}
        justify="flex-start"
        py={[8, 20]}
      >
        <Box>
          <Input
            value={url}
            name="urlInput"
            onKeyDown={(e) => {
              handleUrlOnKeyPress(e, setSrc, fallbackImg);
            }}
            onChange={(e) => {
              handleChange(e, setUrl);
            }}
            {...inputProps}
          />

          <InputHeading text="Enter your question here..." />
          <Input
            value={question}
            name="questionInput"
            onChange={(e) => {
              handleChange(e, setQuestion);
            }}
            {...inputProps}
          />
          <InputHeading text="Add some polls..." />
          <Input
            value={newPoll}
            name="pollInput"
            onChange={(e) => {
              handleChange(e, setNewPoll);
            }}
            onKeyDown={(e) => {
              handlePollOnKeyPress(e, setPolls, setNewPoll, polls);
            }}
            {...inputProps}
          />
        </Box>
        {/* button to add poll  */}
        <Button
          onClick={() => {
            setPolls([...polls, newPoll]);
            setNewPoll('');
          }}
          bg="#01497c"
          my="4"
          p={[4, 8]}
          color="white"
          fontSize={['md', 'xl']}
          w={['sm', 'md']}
          _hover={{}}
        >
          Add poll
        </Button>
        {/* polls list with delete button */}
        <Poll polls={polls} deletePoll={deletePoll} isDeletePoll={true} />
      </Flex>
    </SimpleGrid>
  );
}

export default preview;
