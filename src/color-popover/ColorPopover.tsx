import {useRef, useState} from 'react';
import {HexColorPicker, HexColorInput} from 'react-colorful';
import {useClickOutside} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';
import style from './ColorPopover.module.css';

const ColorPopover = (props:Props)=> {
    const theme = useTheme('colorPopover'),
          colorPopover = useRef();
    const [open, setOpen] = useState(false);
    
    useClickOutside(colorPopover, ()=>
        setOpen(false));
    
    return (
        <div
            className={classNames(
                style.colorPopover,
                theme.colorPopover,
                props.className
            )}
            ref={colorPopover}
            tabIndex={0}
            onKeyDown={(event)=> {
                if (event.code == 'Enter') {
                    event.preventDefault();
                    setOpen(true);
                } else if (event.code == 'Escape') {
                    event.preventDefault();
                    setOpen(false);
                }
            }}>
            <div
                className={classNames(
                    theme.color,
                    props.disabled &&
                        theme.disabled
                )}
                style={{backgroundColor: props.color}}
                onClick={()=>
                    setOpen(!open)}/>
            {!props.disabled &&
                open &&
                    <div className={theme.colorPicker}>
                        <HexColorPicker
                            color={props.color}
                            onChange={props.onChange}/>
                        {props.hexInput &&
                            <HexColorInput
                                color={props.color}
                                prefixed
                                onChange={props.onChange}/>}
                    </div>}
            {props.error &&
                <div className={theme.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    color:string;
    hexInput?:boolean;
    error?:string;
    disabled?:boolean;
    onChange?:(color:string)=> void;
}

export default ColorPopover;
