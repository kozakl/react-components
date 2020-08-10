import {ChangeEventHandler, FunctionComponent,
        ReactNode, useLayoutEffect, useRef} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './TextArea.pcss';

export const TextArea:FunctionComponent<Props> = (props)=>
{
    const areaRef = useRef<HTMLTextAreaElement>();
    
    useLayoutEffect(()=> {
        areaRef.current.style.height = 'inherit';
        areaRef.current.style.height = `${areaRef.current.scrollHeight}px`; 
    }, [areaRef.current?.value]);
    
    const textAreaClass = classNames(
        style.textArea,
        props.className,
        props.disabled && style.disabled
    );
    const adornmentContainerClass = classNames(
        style.adornmentContainer,
        (props.startAdornment ||
            props.endAdornment) && style.flex,
        props.error && style.error
    );
    const placeholderContainerClass = classNames(
        style.placeholderContainer,
        !props.startAdornment && style.relative
    );
    const placeholderClass = classNames(
        style.placeholder,
        (props.value ||
            props.opened ||
            props.startAdornment) && style.opened
    );
    return (
        <div className={textAreaClass}>
            <div className={adornmentContainerClass}>
                {props.startAdornment &&
                    <div className={style.startAdornment}>
                        {props.startAdornment}
                    </div>}
                <div className={placeholderContainerClass}>
                    {props.placeholder &&
                        <label className={placeholderClass}>
                            {props.placeholder}
                        </label>}
                    <textarea
                        className={style.area}
                        id={props.id}
                        ref={areaRef}
                        value={props.value}
                        disabled={props.disabled}
                        rows={props.rows}
                        maxLength={props.maxLength}
                        onChange={props.onChange}/>
                </div>
                {props.endAdornment &&
                    <div className={style.endAdornment}>
                        {props.endAdornment}
                    </div>}
            </div>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    id?:string;
    value?:string;
    opened?:boolean;
    disabled?:boolean;
    placeholder?:ReactNode;
    rows?: number;
    maxLength?:number;
    startAdornment?:ReactNode;
    endAdornment?:ReactNode;
    error?:string;
    onChange?:ChangeEventHandler<HTMLTextAreaElement>;
}

export default TextArea;
