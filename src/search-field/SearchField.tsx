import {ChangeEventHandler, KeyboardEvent,
        MouseEventHandler, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import {IconButton} from '../icon-button';
import {XMark} from '../icons';
import {TextField} from '../text-field';
import {useTheme} from '../theme';
import React from 'react';

const SearchField = (props:Props)=> {
    const theme = useTheme('searchField');
    
    function onDown(event:KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    }
    
    function onUp(event:KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter') {
            if (props.isEmpty() && !props.allowEnterEmpty) {
                props.setError(props.errorMessages.empty);
                return;
            } else if (!props.allowEnterEmpty &&
                       !props.value.startsWith('#') &&
                        props.value.length < 3) {
                props.setError(props.errorMessages.tooFew);
                return;
            }
            props.setError(null);
            props.onSearch();
        }
    }
    
    return (
        <TextField
            className={classNames(
                theme.searchField,
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
                        colorPrimary="var(--color-primary)"
                        padding="0.5em"
                        margin="-0.625em"
                        width="2.5em"/>
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
    outlined: true,
    errorMessages: {
        empty: 'Field cannot be empty',
        tooFew: 'Field has too few characters'
    }
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
    isEmpty:()=> boolean;
    error?:string;
    setError?:(error:string)=> void;
    errorMessages:{
        empty:string;
        tooFew:string;
    };
    onSearch:()=> void;
    onChange?:ChangeEventHandler<HTMLInputElement>;
    onClickClose?:MouseEventHandler<HTMLButtonElement>;
}

export default SearchField;
