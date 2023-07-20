import { Grid } from '@mui/material'
import React from 'react';
import './OtherContantStyle.css';
const OtherContant = () => {
  return (
    <>
        <div className="othercontant-container">
            <Grid container>
                <Grid xs={12} sm={12} md={12}>
                    <h1 className="heading-contanct">Add Your Other Module of Components</h1>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default OtherContant
