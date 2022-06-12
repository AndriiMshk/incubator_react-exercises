import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectContainer = () => {

  const items: { value: string, title: string }[] = [
    { value: '1', title: 'qqq' },
    { value: '2', title: 'www' },
    { value: '3', title: 'eee' },
  ];

  const [value, setValue] = useState<string>('');

  const onChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
  };
  const onChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <SelectComp onChange={onChange} value={value} items={items} onChange2={onChange2} />

    </div>
  );
};

type SelectPropsType = {
  onChange: (event: SelectChangeEvent<string>) => void
  onChange2: (even: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
  items: { value: string, title: string }[]
}

const SelectComp: React.FC<SelectPropsType> = (
  {
    onChange,
    onChange2,
    value,
    items,

  },
) => {

  const selectedItem = items.find(i => i.value === value);

  return (
    <div>
      <h3>{selectedItem?.title}</h3>
      <select value={value} onChange={(event) => onChange2(event)}>
        {items.map((i, index) => (<option key={index}>{i.title}</option>))}
      </select>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{selectedItem?.value}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={onChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {items.map((i, index) => (<MenuItem key={index} value={i.value}>{i.title}</MenuItem>))}
        </Select>
      </FormControl>

    </div>
  );
};