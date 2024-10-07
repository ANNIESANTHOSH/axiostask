import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import axios from 'axios';
import './Home.css'; // Ensure this file is created as discussed earlier

const Home = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setRows(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // CONNECT EXTERNAL API (useEffect)

  return (
    <Container sx={{ paddingTop: 4 }} className="card-container">
      {rows.map((row) => (
        <div className="card-item" key={row.id}>
          <Card>
            <CardMedia
              component="img"
              alt={row.title}
              height="200" // Adjust height as needed
              image={row.image}
              sx={{ objectFit: 'contain' }} // Ensures the full image is visible
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {row.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${row.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {row.rating.rate} ({row.rating.count} reviews)
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Container>
  );
}

export default Home;
