import { Heading } from '@chakra-ui/react';

const InputHeading = ({ text }) => (
  <Heading
    my="4"
    as="h2"
    color="gray.600"
    fontSize={['2xl', '4xl']}
    fontWeight="bolder"
  >
    {text}
  </Heading>
);

export default InputHeading;
