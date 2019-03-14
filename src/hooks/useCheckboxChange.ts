import {useState} from 'react';

export function useCheckboxChange(initialChecked:boolean)
{
    const [checked, setChecked] = useState(initialChecked);
    return {
        checked,
        onChange: ()=> setChecked(!checked)
    }
}
