import React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function Calendar() {
  const [selected, setSelected] = React.useState<Date>();


  return (
    <DayPicker  
    className=''
      styles={{day: {cursor: 'pointer'} }}
      modifiersStyles={{ selected: { backgroundColor: '#C72323' } }}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}