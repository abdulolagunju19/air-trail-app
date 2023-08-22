// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '@/utils/db';

// The API route handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method === 'GET') {
      try {
        
        // SQL query to retrieve flight data from the database
        const query = `
          SELECT * FROM flights
        `
        const flightData = await conn.query(query);
        res.status(200).json(flightData.rows);

      } catch (error) {
        console.error('Error fetching flight data:', error);
        res.status(500).json({ error: 'An error occurred while fetching flight data from the PostgreSQL database.' });
      }

    } else if (req.method === 'GENERATE'){
      try {
        
        // Fetch flight data from an external API using the AviationStack service
        const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.API_KEY}`);
        const flightApiData = await response.json();
    
        if (flightApiData.data && flightApiData.data.length > 0) {
          const flightData = flightApiData.data;
    
          try {

            // Insert fetched flight data into the PostgreSQL database
            await Promise.all(
              flightData.map(async (flight: FlightData) => {
                
                const query = `
                  INSERT INTO flights(flight_number, departure_airport, arrival_airport, flight_airline, flight_status, flight_date, icao)
                  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
                `;
    
                const values = [
                  flight.flight.number,
                  flight.departure.airport,
                  flight.arrival.airport,
                  flight.airline.name,
                  flight.flight_status,
                  flight.flight_date,
                  flight.flight.icao
                ];
    
                try {
                  const result = await conn.query(query, values);
                  console.log(result);
                  res.status(200).json({ message: 'Flight data inserted successfully to PostgreSQL database.' });
                } catch (error) {
                  console.error('Error inserting flight data:', error);
                }
              })
            );
          } catch (error) {
            console.error('Error inserting flight data: ', error);
            res.status(500).json({ error: 'An error occurred while inserting flight data.' });
          }
        } else {
          console.error('No flight data found.');
          res.status(404).json({ error: 'No flight data found.' });
        }
      } catch (error) {
        console.error('Error connecting to the Flight API: ', error);
        res.status(500).json({ error: 'An error occurred while fetching flight data.' });
      }
    } else if(req.method === 'POST'){
      try {
        
        const query = `
                  INSERT INTO flights(flight_number, departure_airport, arrival_airport, flight_airline, flight_status, flight_date, icao)
                  VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
    
        const values = [
          req.body.flight_number,
          req.body.departure_airport,
          req.body.arrival_airport,
          req.body.flight_airline,
          req.body.flight_status,
          req.body.flight_date,
          req.body.icao
        ];
        
        // Insert data into the PostgreSQL database
        await conn.query(query, values);
        res.status(200).json({ message: 'Flight has been inserted to PostgreSQL database.'});
      } catch (error) {
        console.error('Error inserting flight data:', error);
        res.status(500).json({ error: 'An error occurred while inserting flight data to the PostgreSQL database.' });
      }
    }
}

// Interface to define the structure of flight data
interface FlightData {
  flight: {
    number: string;
    icao: string;
  };
  departure: {
    airport: string;
  };
  arrival: {
    airport: string;
  };
  airline: {
    name: string;
  };
  flight_status: string;
  flight_date: string;
}