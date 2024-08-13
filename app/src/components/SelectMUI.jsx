import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function SelectMUI({dat,func,atribute}) {
  // const [age, setAge] = React.useState('');

  const handleChangeYear = (event) => {
    func(event.target.value);
  };
  const handleChangeMonth = (event) => {
    func(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {(atribute === "Year")?
        <>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dat}
          label="Year"
          onChange={handleChangeYear}
        >
          <MenuItem  value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
          <MenuItem value={2027}>2027</MenuItem>
          <MenuItem value={2028}>2028</MenuItem>
          <MenuItem value={2029}>2029</MenuItem>
          <MenuItem value={2030}>2030</MenuItem>
        </Select></>:<>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dat}
          label="Month"
          onChange={handleChangeMonth}
        >
          <MenuItem value={"Jan/"}>January</MenuItem>
          <MenuItem value={"Feb/"}>Febrauary</MenuItem>
          <MenuItem value={"Mar/"}>March</MenuItem>
          <MenuItem value={"Apr/"}>April</MenuItem>
          <MenuItem value={"May/"}>May</MenuItem>
          <MenuItem value={"Jun/"}>June</MenuItem>
          <MenuItem value={"Jul/"}>July</MenuItem>
          <MenuItem value={"Aug/"}>August</MenuItem>
          <MenuItem value={"Sep/"}>September</MenuItem>
          <MenuItem value={"Oct/"}>October</MenuItem>
          <MenuItem value={"Nov/"}>November</MenuItem>
          <MenuItem value={"Dec/"}>December</MenuItem>
        </Select></>}


      </FormControl>
    </Box>
  );
}

export default SelectMUI;