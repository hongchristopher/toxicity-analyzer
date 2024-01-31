import React from 'react';
import { Typography } from '@mui/material';

function ResultCard({result}) {
    return (
    <div>
    <Typography variant='h5'>Results</Typography>
    <Typography variant='p'>
        <b>Toxicity:</b> {result["interpretations"][0]} <br></br>
        <b>Insult:</b> {result["interpretations"][1]} <br></br>
        <b>Threat:</b> {result["interpretations"][2]} <br></br>
        <b>Identity Attack:</b> {result["interpretations"][3]}
    </Typography>
    </div>
    )
};

export default ResultCard;