import React from 'react';
import {
    Flex,
    Button, 
    Heading,
    ButtonGroup,
    Spacer,
    Divider
  } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Button variant='ghost' as='a' href='/'>
              <Heading size='md'>DemoTrail Traffic Registry</Heading>
          </Button>
          <Spacer/>
          <ButtonGroup>
            <Button colorScheme='blue' as='a' href='/dashboard'>Add Flight</Button>
            <Button colorScheme='blue' as='a' href='/past'>Past Flights</Button>
            <Button colorScheme='blue' as='a' href='/rules'>Rules</Button>
          </ButtonGroup>
      </Flex>
      <br/>
      <Divider/>
    </>
  )
}

export default Header;