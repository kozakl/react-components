import {ReactNode} from 'react';
import {Button} from '@kozakl/components/button';
import {withModal} from '@kozakl/components/modal';
import {useDialogsState} from '@kozakl/states';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Dialog.module.css';

export const Dialog = (props:Props)=> {
    const {deleteDialog} = useDialogsState();
    
    return (
        <div
            className={classNames(
                style.dialog,
                props.reversed && style.reversed,
                props.className
            )}>
            <h3 className={style.title}>
                {props.title}
            </h3>
            <div className={style.message}>
                {props.message}
            </div>
            <div className={style.actions}>
                {props.dismiss &&
                    <Button
                        reversed={props.reversed}
                        onClick={()=> {
                            deleteDialog(props.id);
                            if (props.onDismiss) {
                                props.onDismiss();
                            }
                        }}>
                        {props.dismiss}
                    </Button>}
                {props.confirm &&
                    <Button
                        reversed={props.reversed}
                        onClick={()=> {
                            deleteDialog(props.id);
                            if (props.onConfirm) {
                                props.onConfirm();
                            }
                        }}>
                        {props.confirm}
                    </Button>}
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
    id?:number;
    title:string;
    message:ReactNode;
    reversed?:boolean;
    confirm?:string;
    dismiss?:string;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}

export default withModal(Dialog);