import React from 'react';
import { Center, Flex, Container } from '@chakra-ui/react';

import Header from './Header';
import TableUI from './TableUI';

const PastFlights: React.FC = () => {
  return (
    <Flex flexDir='column' m='10' gap='5'>
        <Header />
        <TableUI/>
    </Flex>
  )
}

export default PastFlights;