import {MutableRefObject, useEffect} from 'react';
import {paddingLeft, paddingRight} from '../helpers/list';

export function useListPadding(list:MutableRefObject<HTMLDivElement>)
{
    useEffect(()=> {
        window.addEventListener('resize', onResize);
        onResize();
        
        function onResize() {
            list.current.style.paddingLeft = paddingLeft(list) + 'px';
            list.current.style.paddingRight = paddingRight(list) + 'px';
        }
        
        return ()=>
            window.removeEventListener('resize', onResize);
    }, []);
}
