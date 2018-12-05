import * as React from 'react';
import * as style from './Dialog.pcss';
import {FunctionComponent} from 'react';
import {Button} from 'reactstrap';

const Dialog:FunctionComponent<Props> = (props)=>
{
    return (
        <div className={style.dialog}>
            <h5 className={style.title}>{props.title}</h5>
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
    )
};

Dialog.defaultProps = {
    confirm: 'OK',
    dismiss: 'Cancel'
};

interface Props {
    title:string;
    confirm?:string;
    dismiss?:string;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}

export default Dialog;
