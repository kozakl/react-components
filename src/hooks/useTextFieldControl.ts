import {ChangeEvent, useState} from 'react';

export function useTextFieldControl(initialValue:string)
{
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> 
            setValue(event.target.value)
    }
}
