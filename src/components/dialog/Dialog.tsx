import {FunctionComponent} from 'react';
import {Button} from 'reactstrap';
import {classNames} from '@kozakl/utils';
import {Modal} from '../modal';
import React from 'react';
import style from './Dialog.pcss';

const Dialog:FunctionComponent<Props> = (props)=>
{
    const dialogClass = classNames(
        style.dialog,
        props.className
    );
    return (
        <Modal visible={props.visible}>
            <div className={dialogClass}>
                <h5 className={style.title}>
                    {props.title}
                </h5>
                <div className={style.message}>
                    {props.children}
                </div>
                <div className={style.actions}>
                    <Button
                        onClick={props.onDismiss}
                        size="sm"
                        outline>
                        {props.dismiss}
                    </Button>
                    <Button
                        onClick={props.onConfirm}
                        color="success"
                        size="sm">
                        {props.confirm}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

Dialog.defaultProps = {
    confirm: 'OK',
    dismiss: 'Cancel'
};

interface Props {
    className?:string;
    visible:boolean;
    title:string;
    confirm?:string;
    dismiss?:string;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}

export default Dialog;
