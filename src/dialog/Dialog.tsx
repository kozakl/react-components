import {ReactNode} from 'react';
import {Button} from '../button';
import {withModal} from '../modal';
import {useDialogsState} from '@kozakl/states';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

export const Dialog = (props:Props)=> {
    const theme = useTheme('dialog');
    const {deleteDialog} = useDialogsState();
    
    return (
        <div
            className={classNames(
                theme.dialog,
                props.className
            )}>
            <h3 className={theme.title}>
                {props.title}
            </h3>
            <div className={theme.message}>
                {props.message}
            </div>
            <div className={theme.actions}>
                {props.dismiss &&
                    <Button
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
                        secondary
                        disabled={props.confirmDisabled}
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
    confirm?:string;
    dismiss?:string;
    confirmDisabled?:boolean;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}

export default withModal(Dialog);
