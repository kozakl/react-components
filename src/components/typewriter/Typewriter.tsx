import {FunctionComponent, useState} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Typewriter.pcss';
import {useTimeout} from "@kozakl/hooks";

export const Typewriter:FunctionComponent<Props> = (props)=>
{
    const [show, setShow] = useState(false);
    
    useTimeout(()=> {
        setShow(true);
    }, props.delay);
    
    const typewriterClass = classNames(
        props.className,
        style.typewriter,
        show && style.show
    );
    return (
        <div className={typewriterClass}>
            {props.children}
        </div>
    );
};

interface Props {
    className?:string;
    delay?:number;
}

export default Typewriter;
