import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  useToast 
} from '@chakra-ui/react';

import Header from './Header';

const InsertFlight: React.FC = () => {
  const [flightDate, setFlightDate] = useState<string>('');
  const [flightStatus, setFlightStatus] = useState<string>('');
  const [flightAirline, setFlightAirline] = useState<string>('');
  const [flightNumber, setFlightNumber] = useState<string>('');
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [icaoValue, setIcaoValue] = useState<string>('');

  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      flight_number: flightNumber,
      departure_airport: departure,
      arrival_airport: arrival,
      flight_airline: flightAirline,
      flight_status: flightStatus,
      flight_date: flightDate,
      icao: icaoValue
    };

    try {
      const response = await fetch('/api/flight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Flight data inserted in database:', data);
        setFlightDate('');
        setFlightStatus('');
        setFlightAirline('');
        setFlightNumber('');
        setDeparture('');
        setArrival('');
        setIcaoValue ('');

        toast({
          title: 'Flight added.',
          description: "We've added the flight to the system.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else{
        console.error('There was an error adding the flight to the system.')
      }
    } catch (error) {
      console.error('Could not post data to PostgreSQL database, ' + error)
      toast({
        title: 'Flight not added.',
        description: "Error adding the flight to the system.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex flexDir='column' m='10'>
      <Header/>
      <form onSubmit={handleSubmit}>
        <FormControl py='4' px='3' maxW='md' alignSelf='center' isRequired>
          <FormLabel py='2'>Flight Date: </FormLabel>
          <Input 
            variant='filled'
            type='datetime-local'
            value={flightDate}
            onChange={(event) => setFlightDate(event.target.value)}
          />
          <FormLabel py='4'>Flight Status: </FormLabel>
          <Input 
            value={flightStatus}
            onChange={(event) => setFlightStatus(event.target.value)}
          />
          <FormLabel py='2'>Flight Airline: </FormLabel>
          <Input 
            value={flightAirline}
            onChange={(event) => setFlightAirline(event.target.value)}
          />
          <FormLabel py='2'>Flight Number: </FormLabel>
          <Input 
            value={flightNumber}
            onChange={(event) => setFlightNumber(event.target.value)}
          />
          <FormLabel py='2'>ICAO: </FormLabel>
          <Input 
            value={icaoValue}
            onChange={(event) => setIcaoValue(event.target.value)}
          />
          <FormLabel py='2'>Departure Location: </FormLabel>
          <Input 
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
          />
          <FormLabel py='2'>Arrival Location: </FormLabel>
          <Input 
            value={arrival}
            onChange={(event) => setArrival(event.target.value)}
          />
          <Button mt='5' type="submit">Submit</Button>
        </FormControl>
      </form>
    </Flex>
  )
}

export default InsertFlight;