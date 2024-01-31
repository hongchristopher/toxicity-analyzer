import './App.css'
import UserForm from './components/UserForm'
import ResultCard from './components/ResultCard'
import { Box, Container, Paper, Typography } from '@mui/material';
import React, {useState} from 'react';

function App() {
  const [result, setResult] = useState('')
  return (
    <Container sx={{ height:'100vh' }}>
      <Typography variant='h1' sx={{ my: 1 }}>APPROACH</Typography>
      <Typography variant='h4'>Receive and Interpret Messages for Toxicity</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, pt: 3, justifyContent:'space-between'}}>
          <Paper elevation={8} sx={{flex: 1, padding: 3}}>
            <Typography variant='h5'>WHAT IS APPROACH?</Typography>
            <Typography variant='p'>
              Approach is an application that allows you to utilize Google's Perspective, a service that uses machine learning models to determine if statements are abusive. 
              Perspective allows for rapid determinations in identifying toxicity, threats, insults, or identity attacks. 
              The goal of Approach is to give users the opportunity to leverage this technology to determine possible attacks/threats in text.<br/><br/>
              Email questions to hongchri@oregonstate.edu 
            </Typography>
          </Paper>
          <Paper elevation={8} sx={{flex: 1, padding: 3}}>
            <Typography variant='h5'>HOW TO USE APPROACH</Typography>
            <Typography variant='p'>
              1. Enter your message into the following text field<br /> 
              2. Press ANALYZE to send message for interpretation<br/> 
              3. Receive results and interpretation in the Results card <br/> 
              4. Backtrack freely by editing or deleting your message. Your message does not disappear on submission. 
            </Typography>
            <br/>
          </Paper>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 4, justifyContent:'space-between'}}>
        <Paper elevation={8}>
            <UserForm setResult={setResult}/>
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 4, justifyContent:'space-between'}}>
        <Paper elevation={8} sx = {{flex: 1, padding: 3}}>
            <ResultCard result={result}/>
        </Paper>
      </Box>
    </Container>
  )
};

export default App
