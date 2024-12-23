import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';


function App() {
  const [bookInfo, setBookInfo] = useState('');

  const googleAPI = 'https://www.googleapis.com/books/v1/volumes';

  const handleChange = (event) => {
    setBookInfo(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FORM DATA: ', bookInfo);
    const response = await axios.get(googleAPI, {
      params: {
        q: bookInfo
      }
    });

    console.log(response.data.items || []);
  }

  return (
    <div className="App">
      <h1>Bkkppr</h1>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField id="booksearch" label="Book Search" variant="outlined" onChange={handleChange} value={bookInfo} />
        <Button variant="outlined" type='submit'>Search</Button>
      </Box>
    </div>
  );
}

export default App;
