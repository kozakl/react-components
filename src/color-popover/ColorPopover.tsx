import {useRef, useState} from 'react';
import {HexColorPicker} from 'react-colorful';
import {useClickOutside} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './ColorPopover.module.css';

const ColorPopover = (props:Props)=> {
    const colorPopover = useRef();
    const [open, setOpen] = useState(false);
    
    useClickOutside(colorPopover, ()=>
        setOpen(false));
    
    return (
        <div
            className={classNames(
                style.colorPopover,
                props.className
            )}
            ref={colorPopover}>
            <div
                className={classNames(
                    style.color,
                    props.disabled &&
                        style.disabled
                )}
                style={{backgroundColor: props.color}}
                onClick={()=>
                    setOpen(!open)}/>
            {!props.disabled &&
                open &&
                    <div className={style.colorPicker}>
                        <HexColorPicker
                            color={props.color}
                            onChange={props.onChange} />
                    </div>}
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    color:string;
    error?:string;
    disabled?:boolean;
    onChange?:(color:string)=> void;
}

export default ColorPopover;
