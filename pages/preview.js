import React, { useState } from 'react';
import { Heading, Flex, Input, SimpleGrid, Box } from '@chakra-ui/react';
import ImageWithFallback from '../components/imageWithFallback';
import Poll from '../components/poll';
import InputHeading from '../components/inputHeading';
import MockupQuestion from '../components/mockupQuestion';
import Preloader from '../components/prelaoder';
import { flexProps, inputProps } from '../styles/props';

function preview() {
  const fallbackImg = '/undraw.png';
  const [question, setQuestion] = useState('');
  const [url, setUrl] = useState('');
  const [src, setSrc] = useState(fallbackImg);
  const [newPoll, setNewPoll] = useState('');
  const [polls, setPolls] = useState([]);

  const handleChange = (e, changeState) => {
    changeState(e.target.value);
  };

  const handleUrlOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value === '') setSrc(fallbackImg);
      else setSrc(e.target.value);
    }
  };

  const handlePollOnKeyPress = (e) => {
    if (e.keyCode === 13) setPolls(...polls, e.target.value);
  };

  return (
    <SimpleGrid columns={[1, 2]} spacing={[0, 10]} bg="gray.200">
      <Flex
        height={['60vh', '100vh']}
        {...flexProps}
        justify="flex-start"
        py={[8, 20]}
      >
        {src === fallbackImg && question === '' ? (
          <Preloader />
        ) : (
          <>
            <ImageWithFallback src={src} width={300} height={300} />
            <MockupQuestion question={question} />
          </>
        )}
      </Flex>

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
              handleUrlOnKeyPress(e);
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
          {/* <InputHeading text="Add some polls..." /> */}
          {/* <Input */}
          {/*   value={newPoll} */}
          {/*   name="pollInput" */}
          {/*   onChange={(e) => { */}
          {/*     handleChange(e, setNewPoll); */}
          {/*   }} */}
          {/*   onKeyDown={(e) => { */}
          {/*     handlePollOnKeyPress(e); */}
          {/*   }} */}
          {/*   {...inputProps} */}
          {/* /> */}
          {/* <Poll polls={polls} /> */}
        </Box>
      </Flex>
    </SimpleGrid>
  );
}

export default preview;
