import {MouseEvent, ReactNode,
        useEffect, useState} from 'react';
import {useToastsState} from '@kozakl/states';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../../theme';
import React from 'react';

const Toast = (props:Props)=> {
    const theme = useTheme('toast');
    const [show, setShow] = useState(false);
    const {deleteToast} = useToastsState();
    
    useEffect(()=> {
        setTimeout(()=>
            setShow(true), 10);
        if (props.autoClose) {
            const timer = setTimeout(()=> {
                setShow(false);
                setTimeout(()=>
                    deleteToast(props.id), 275);
            }, 2750);
            return ()=>
                clearTimeout(timer);
        }
    }, []);
    
    function onClick(event:MouseEvent) {
        if (event.target instanceof HTMLButtonElement ||
            event.target instanceof HTMLAnchorElement) {
            setShow(false);
            setTimeout(()=> 
                deleteToast(props.id), 275);
        }
    }
    
    return (
        <div
            className={classNames(
                theme.toast,
                props.className,
                show &&
                    theme.show
            )}
            key={props.id}
            onClick={onClick}>
            {props.body}
        </div>
    );
};

interface Props {
    className?:string;
    id?:number;
    body?:ReactNode;
    autoClose?:boolean;
}

export default Toast;
