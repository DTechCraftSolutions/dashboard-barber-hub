 import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';


interface radioItemProps {
    weekDay: string
}



export function RadioItem ({weekDay}: radioItemProps){
    const [selected, setSelected] = useState(false)
    return (
        <div className='flex items-center gap-2'>
            <RadioGroup.Item className='border-2 w-4 h-4 rounded' value={`${selected? "S": "N"}`} onChange={() => setSelected(!selected)}  >
                <RadioGroup.Indicator className='w-4 relative z-20 h-4'/>
            </RadioGroup.Item>
            <p className='w-28'>
                {weekDay}
            </p>
        </div>
    )
}