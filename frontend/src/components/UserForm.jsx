import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';

function UserForm ({setResult}) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = fetch('http://localhost:5000/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type':'application/json; charset=UTF-8'
      }
    })
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setResult(data);
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth multiline
          id="outlined-basic"
          label="Message"
          minRows={10}
          variant="outlined"
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="outlined" color="primary" sx={{ my: 2 }}>Analyze</Button>
      </form>
    </div>
  );
}
    
export default UserForm;

