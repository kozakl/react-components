import {FunctionComponent} from 'react';
import {Button} from 'reactstrap';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Dialog.pcss';

const Dialog:FunctionComponent<Props> = (props)=>
{
    const dialogClass = classNames(
        style.dialog,
        props.className
    );
    return (
        <div className={dialogClass}>
            <h5 className={style.title}>
                {props.title}
            </h5>
            <div className={style.message}>
                {props.children}
            </div>
            
            <div className={style.actions}>
                <Button
                    onClick={props.onConfirm}
                    color="success"
                    size="sm">
                    {props.confirm}
                </Button>
                <Button
                    onClick={props.onDismiss}
                    size="sm"
                    outline>
                    {props.dismiss}
                </Button>
            </div>
        </div>
    );
};

Dialog.defaultProps = {
    confirm: 'OK',
    dismiss: 'Cancel'
};

interface Props {
    className?:string;
    title:string;
    confirm?:string;
    dismiss?:string;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}

export default Dialog;
