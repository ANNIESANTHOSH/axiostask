import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Alert } from '@mui/material';
import './Addshop.css'; // Ensure this file is created for custom styles

const AddShop = () => {
  const [shop, setShop] = useState({
    title: "",
    price: "",
    image: "",
    ratingRate: "",
    ratingCount: ""
  });

  const [errors, setErrors] = useState({}); // Object to hold individual error messages

  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear specific error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {}; // Temporary object to hold new errors

    // Basic validation
    if (!shop.title) {
      newErrors.title = "enter the title.";
    }
    if (!shop.price) {
      newErrors.price = "price is not enterd.";
    } else if (parseFloat(shop.price) <= 0) {
      newErrors.price = "Price must be greater than zero.";
    }
    if (!shop.image) {
      newErrors.image = "Image URL is required in this field.";
    }
    if (!shop.ratingRate) {
      newErrors.ratingRate = "Rating  is required.";
    } else if (parseFloat(shop.ratingRate) < 0 || parseFloat(shop.ratingRate) > 5) {
      newErrors.ratingRate = "Rating must be between 0 and 5.";
    }
    if (!shop.ratingCount) {
      newErrors.ratingCount = "Rating (Count) is required.";
    } else if (parseInt(shop.ratingCount) < 0) {
      newErrors.ratingCount = "Rating count must be a non-negative integer.";
    }

    // If there are any errors, set them and do not submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log(shop); // Log shop data
    // Reset form
    setShop({
      title: "",
      price: "",
      image: "",
      ratingRate: "",
      ratingCount: ""
    });
    setErrors({}); // Clear any previous errors
  };

  return (
    <Container sx={{ paddingTop: 4 }} className="add">
      <Typography variant="h4" className="add-title" color="red">
        Add Shop
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={shop.title}
          onChange={handleChange}
          required
          error={!!errors.title} // Show error state
          helperText={errors.title} // Show specific error message
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={shop.price}
          onChange={handleChange}
          required
          error={!!errors.price} // Show error state
          helperText={errors.price} // Show specific error message
        />
        <TextField
          name="image"
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={shop.image}
          onChange={handleChange}
          required
          error={!!errors.image} // Show error state
          helperText={errors.image} // Show specific error message
        />
        <TextField
          name="ratingRate"
          label="Rating (Rate)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={shop.ratingRate}
          onChange={handleChange}
          required
          error={!!errors.ratingRate} // Show error state
          helperText={errors.ratingRate} // Show specific error message
        />
        <TextField
          name="ratingCount"
          label="Rating (Count)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={shop.ratingCount}
          onChange={handleChange}
          required
          error={!!errors.ratingCount} // Show error state
          helperText={errors.ratingCount} // Show specific error message
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="add-button"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddShop;
