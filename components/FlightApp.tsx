import React, { useState } from 'react';
import {
  Flex,
  Spacer,
  Checkbox,
  Text,
  Divider,
  Button,
  UnorderedList,
  ListItem,
  Image,
  Box,
  Stack
} from '@chakra-ui/react';

import Header from './Header';

// Interface to define the structure of flight data
interface Flight {
  icao: string;
  flight_date: string;
  flight_status: string;
  flight_airline: string;
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
};

const FlightApp: React.FC = () => {
  
  // State to hold the flight data fetched from the API
  const [flightData, setFlightData] = useState<Flight[]>([]);


  // Function to fetch flight data from the API
  const getFlightData = async () => {
    try {
      const response = await fetch(`/api/flight`);
      const data = await response.json();

      // Update the flightData state with fetched data
      setFlightData(data);
    } catch (error) {
      throw new Error('There was an error connecting to the API endpoint /api/flight. ' + error);
    }
    
  }

  return (
    <Flex flexDir='column' m='10'>
      <Header/>
      <Stack spacing={8} direction='row'>
        <Image 
          src='/aircraft.png'
          alt='aircraft'
          width='500px'
        />
        <Box px='5'>
          <Text py='5'>Whether it is optimizing crew schedules, coordinating ground operations, or enhancing the passenger experience, the Air Trail Air Traffic Registry revolutionizes the way aviation professionals interact with air traffic data, ultimately contributing to safer and more efficient flight operations.</Text>
          <UnorderedList>
            <ListItem py='2'>Air Traffic Analytics</ListItem>
            <ListItem py='2'>Regulatory Compliance</ListItem>
            <ListItem py='2'>Data Security and Privacy</ListItem>
            <ListItem py='2'>Historical Flight Data</ListItem>
            <ListItem py='2'>API Integration</ListItem>
          </UnorderedList>
          <Button width='50%' onClick={getFlightData} my='20'>Get Flight Data</Button>
        </Box>
      </Stack>
      {(flightData.length > 0) &&
        <Flex flexDir='column' p='2' gap='2'>
          <Flex justifyContent='center' py='5'>
            <Image width="650" height="500" src='/airnav.png' />
          </Flex> 
          {flightData.slice(0, 10).map((flight, index) => (
            <React.Fragment key={flight.icao}>
              <Text fontSize='2xl' as='u'>Flight {index+1}</Text>
              <Text>Flight Date: {flight.flight_date}</Text>
              <Text>Flight Status: {flight.flight_status}</Text>
              <Text>Flight Airline: {flight.flight_airline}</Text>
              <Text>Flight Number: {flight.flight_number}</Text>
              <Text>Departure Location: {flight.departure_airport}</Text>
              <Text>Arrival Location: {flight.arrival_airport}</Text>
              <Spacer/>
              <Checkbox>Flight Plan</Checkbox>
              <Checkbox>Risk Assessment</Checkbox>
              <Checkbox>Evaluations Complete</Checkbox>
              <Divider/>
            </React.Fragment>
          ))
          }
        </Flex> 
      }
    </Flex>
  )
}

export default FlightApp;