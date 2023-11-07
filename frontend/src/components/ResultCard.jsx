import React from 'react';
import { Typography } from '@mui/material';

function ResultCard({result}) {
    return (
    <div>
    <Typography variant='h5'>Results</Typography>
    <Typography variant='p'>
        Toxicity: {result[0]} <br></br>
        Insult: {result[1]} <br></br>
        Threat: {result[2]} <br></br>
        Identity Attack: {result[3]}
    </Typography>
    </div>
    )
};

export default ResultCard;