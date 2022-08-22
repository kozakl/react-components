import {ChangeEventHandler, KeyboardEvent,
        MouseEventHandler, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import {IconButton} from '../icon-button';
import {XMark} from '../icons';
import {TextField} from '../text-field';
import React from 'react';
import style from './SearchField.module.css';

const SearchField = (props:Props)=> {
    function onDown(event:KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    }
    
    function onUp(event:KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter') {
            if (props.isEmpty() && !props.allowEnterEmpty) {
                props.setError('Field cannot be empty');
                return;
            } else if (!props.allowEnterEmpty &&
                       !props.value.startsWith('#') &&
                        props.value.length < 3) {
                props.setError('Field has too few characters');
                return;
            }
            props.setError(null);
            props.onSearch();
        }
    }
    
    return (
        <TextField
            className={classNames(
                style.searchField,
                props.className
            )}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            openable={props.openable}
            outlined={props.outlined}
            disabled={props.disabled}
            endAdornment={
                <IconButton
                    title="Close searching"
                    disabled={!props.enabledClose}
                    onClick={props.onClickClose}>
                    <XMark
                        padding="0.25em"
                        width="1.25em"/>
                </IconButton>}
            error={props.error}
            onChange={props.onChange}
            onKeyDown={onDown}
            onKeyUp={onUp}/>
    );
};

SearchField.defaultProps = {
    placeholder: "Search",
    openable: false,
    outlined: true
};

interface Props {
    className?:string;
    id?:string;
    value?:string;
    placeholder?:ReactNode|string;
    opened?:boolean;
    openable?:boolean;
    outlined?:boolean;
    allowEnterEmpty?:boolean;
    disabled?:boolean;
    enabledClose?:boolean;
    error?:string;
    setError?:(error:string)=> void;
    isEmpty:()=> boolean;
    onSearch:()=> void;
    onChange?:ChangeEventHandler<HTMLInputElement>;
    onClickClose?:MouseEventHandler<HTMLButtonElement>;
}

export default SearchField;
