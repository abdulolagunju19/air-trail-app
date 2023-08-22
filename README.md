# My Air Trail Project!

## Background and Purpose
In today's fast-paced aviation industry, managing air traffic data efficiently is crucial for ensuring safe and seamless flight operations. 

Modern aviation professionals require reliable tools to streamline their tasks, from monitoring flight scheduling to managing historical data. Our web application, Air Trail Traffic Registry, aims to meet these needs by providing a user-friendly interface to manage and retrieve air traffic data.

Let's take a closer look at a web application designed to manage air traffic data, dissecting its components and discussing potential improvements.

## Tools Used
- The Air Trail web application is built using the React framework and Chakra UI for the frontend.
- The backend is powered by Next.js, which includes API routes for data interaction, and a PostgreSQL database.

## Components
1. The FlightApp component serves as the heart of the application, displaying relevant information about air traffic data and offering functionalities such as fetching flight data and presenting it to users. It consists of various UI elements, including images, text, checkboxes, and buttons, all thoughtfully arranged to provide a seamless user experience.

2. The InsertFlight component enables users to add new flight data to the system. Users can input flight details such as date, status, airline, flight number, departure, arrival, and ICAO code. Upon submission, the data is sent to the backend API for storage in a PostgreSQL database.

3. Both the FlightApp and InsertFlight components utilize a common Header component, promoting consistency in design and navigation across the application.

4. The PastFlights component renders a table made with Chakra UI, populated with previous flights.

5. The RuleBook component renders an embedded PDF.

## Data Flow and Communication

The application communicates with the backend through API routes. When users click the "Get Flight Data" button, a request is made to the /api/flight route to retrieve flight data from the PostgreSQL database. Similarly, when users submit flight data through the InsertFlight component, the data is sent to the /api/flight route for insertion. To first populate the PostgreSQL database with flight data, the Generate request results in the data from the Aviation Stack flight api being placed in the PostgreSQL database.

## Testing
For testing, I used Jest with TypeScript. Currently, the tests are very basic (checking if the home page is rendered and the Air Trail Traffic Registry is displayed on the home page).

Possible New Tests:
1. Test if all pages are rendered.
2. Test if header is rendered.
3. Test for presence of important buttons for data fetching.
4. Mock the API response and test how the component handles different response scenarios (success, error, loading).
5. Simulate form submissions and check if the component behaves as expected based on different inputs.

## Outcome and Takeaways
Building this flight app was the culmination of everything I have learned about Next.js data fetching, and also the chance for me to connect to a PostgreSQL database. It was also the first time I used TypeScript in a project, and adding types and interfaces to my code improved the readability of my code. I also configured Jest in a TypeScript project for the first time, which interestingly enough, deviated from the official Next.js documentation, so follow this video: [Dave Ramsey- Testing Next.js Applications](https://www.youtube.com/watch?v=AS79oJ3Fcf0). In this project, I was able to use skills from React, Chakra UI, Next.js, and HTML/JSX, with new skills from TypeScript and PostgreSQL. 

## Possible Improvements Going Forward
1. Adding the DELETE, POST, and PATCH endpoints and connecting them to my frontend.
2. Automatically fetching data from the API every day, and adding those flights to the PostgreSQL database. Google Cloud Platform?
3. Add mobile responsiveness to the website. The PDF should adjust it's size on mobile, in addition to the images and header.
4. A search bar on the home page to search for a specific flight.
5. Making the image of flights from RadarBox interactive or finding a way to use the RadarBox iframe without this error: ```DOMException: Blocked a frame with origin from accessing a cross-origin frame```
6. Add the OpenWeather API to show weather conditions for a flight location.
7. Refactor where the header component is called to reduce number of renders, currently it is called in almost every component.
8. Implement caching mechanisms to improve application performance by reducing the number of repetitive API requests. Redis maybe?
9. Integrate data visualization libraries to present flight data in a more informative and visually appealing manner, enabling users to gain insights more easily. 
10. Implement user authentication and role-based authorization to ensure that only authorized personnel can access and modify the air traffic data. Next-Auth can be used for this.
11. Dockerize the project.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
