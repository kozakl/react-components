import {useLayoutEffect, useState} from 'react';

export function useOpenNav(desktop:boolean)
{
    const [open, setOpen] = useState(desktop),
          [transit, setTransit] = useState();
    useLayoutEffect(()=> {
        setOpen(desktop);
        setTransit(false);
    }, [desktop]);
    
    return {
        open,
        transit,
        setOpen: (value:boolean, transit = true)=> {
            setOpen(value);
            setTransit(transit);
        }
    }
}
