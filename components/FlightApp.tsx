import React, { useState } from 'react';
import {
  Flex,
  Spacer,
  Checkbox,
  Text,
  Divider,
  Button,
  Center,
  Container,
} from '@chakra-ui/react';

import Header from './Header';

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
  
  const [flightData, setFlightData] = useState<Flight[]>([]);

  const getFlightData = async () => {
    try {
      const response = await fetch(`/api/flight`);
      const data = await response.json();

      setFlightData(data);
    } catch (error) {
      throw new Error('There was an error connecting to the API endpoint /api/flight. ' + error);
    }
    
  }

  return (
    <Flex flexDir='column' m='10'>
      <Header/>
      <Container>
        <Text py='5'>Whether it is optimizing crew schedules, coordinating ground operations, or enhancing the passenger experience, the Air Trail Air Traffic Registry revolutionizes the way aviation professionals interact with air traffic data, ultimately contributing to safer and more efficient flight operations.</Text>
        <Center>
          <Button width='50%' onClick={getFlightData}>Get Flight Data</Button>
        </Center>
      </Container>
      {flightData &&
        <Flex flexDir='column' p='2' gap='2'>
          <Flex justifyContent='center' py='5'>
            <iframe sandbox="allow-same-origin allow-scripts" width="650" height="500" src="https://www.radarbox.com/?widget=1&z=7&lat=53.5461&lng=-113.4937&hideAirportCard=true"></iframe>
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