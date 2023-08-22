import React from 'react';
import { Center, Flex, Container } from '@chakra-ui/react';
import Header from './Header';

const RuleBook: React.FC = () => {
  return (
    <Flex flexDir='column' m='10'>
        <Header />
        <Container maxW='container.sm'>
        <Center borderWidth='5px' borderRadius={5} mt={5} >
            <embed src="/RAC.pdf" width="700" height="800"></embed> 
        </Center>
        </Container>
    </Flex>
  )
}

export default RuleBook;