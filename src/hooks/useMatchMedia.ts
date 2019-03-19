import {useEffect, useState} from 'react';

export function useMatchMedia(query:string)
{
    const [matches, setMatches] = useState();
    useEffect(()=> {
        const media = window.matchMedia(query);
        media.addEventListener('change', onChange);
        setMatches(media.matches);
        
        function onChange() {
            setMatches(media.matches);
        }
        return ()=>
            media.removeEventListener('change', onChange);
    }, []);
    
    return matches;
}
