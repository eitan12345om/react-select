import { Grid } from '@material-ui/core';
import React from 'react';
import { Select } from "./Select";

function App() {

  const options = [
    { label: 'Really long value that just keeps going forever and ever and ever and... it stopped', value: 'long' },
    { label: 'Argentina', value: 'argentina' },
    { label: 'Brazil', value: 'brazil' },
    { label: 'Canada', value: 'canada' },
    { label: 'Guatemala', value: 'guatemala' },
    { label: 'Haiti', value: 'haiti' },
    { label: 'Iceland', value: 'iceland' },
    { label: 'Israel', value: 'israel' },
    { label: 'Mexico', value: 'mexico' },
    { label: 'Panama', value: 'panama' },
    { label: 'Portugal', value: 'portugal' },
    { label: 'Spain', value: 'spain' },
    { label: 'United States', value: 'usa' },
  ]

  const oneThousandOptions = Array.from(Array(1000)
    .keys())
    .map(k => ({ label: k.toString(), value: k }))

  return (
    <Grid container spacing={3} justifyContent={'space-evenly'}>
      <Grid item xs={4}>
        <Select options={options} label={'Single select'} />
      </Grid>
      <Grid item xs={4}>
        <Select options={options} isMulti label={'Multi select'} />
      </Grid>

      <Grid item xs={4}>
        <Select options={options} isDisabled={true} label={'Disabled'} />
      </Grid>
      <Grid item xs={4}>
        <Select options={options} isError label={'Error'} />
      </Grid>
      <Grid item xs={4}>
        <Select options={[]} label={'No options'} />
      </Grid>
      <Grid item xs={4}>
        <Select options={oneThousandOptions} label={'1000 options'} />
      </Grid>
    </Grid>
  );
}

export default App;
