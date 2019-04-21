import {FunctionComponent, useState} from 'react';
import {useTimeout} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Typewriter.pcss';

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

Typewriter.defaultProps = {
    delay: 0.1
};

interface Props {
    className?:string;
    delay?:number;
}

export default Typewriter;
