import {useRef, useState} from 'react';
import {HexColorPicker} from 'react-colorful';
import {useClickOutside} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './ColorPicker.module.css';

const ColorPicker = (props:Props)=> {
    const colorPopover = useRef();
    const [open, setOpen] = useState(false);
    
    useClickOutside(colorPopover, ()=>
        setOpen(false));
    
    return (
        <div
            className={classNames(
                style.colorPicker,
                props.className
            )}
            ref={colorPopover}>
            <div
                className={classNames(
                    style.swatch,
                    props.disabled &&
                        style.disabled
                )}
                style={{backgroundColor: props.color}}
                onClick={()=>
                    setOpen(!open)}/>
            {!props.disabled &&
                open &&
                    <div className={style.popup}>
                        <HexColorPicker
                            color={props.color}
                            onChange={props.onChange} />
                    </div>}
        </div>
    );
};

interface Props {
    className?:string;
    color:string;
    disabled?:boolean;
    onChange?:(color:string)=> void;
}

export default ColorPicker;
