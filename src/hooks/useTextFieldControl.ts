import {ChangeEvent, useState} from 'react';

export function useTextFieldControl(initialValue:string,
                                    validator?:(value:string)=> boolean) {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            if (validator) {
                if (validator(event.target.value)) {
                    setValue(event.target.value);
                }
            } else {
                setValue(event.target.value);
            }
        }
    }
}
