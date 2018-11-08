import * as React from 'react';
import * as style from './Dialog.pcss';
import {StatelessComponent} from 'react';
import {Button} from 'reactstrap';

export const Dialog:StatelessComponent<Props> = (props)=>
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
    dismiss: 'Anuluj'
};

interface Props {
    title:string;
    confirm?:string;
    dismiss?:string;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}
