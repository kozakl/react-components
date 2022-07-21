import {FunctionComponent} from 'react';
import {default as Modal} from './Modal';
import React from 'react';

export function withModal<P>(
    Component:FunctionComponent<P>,
    modalProps?:Partial<ModalProps>) {
    return (props:P & ModalProps)=>{
        return (
            <Modal {...modalProps} {...props}>
                <Component {...props}/>
            </Modal>
        );
    }
}

export interface ModalProps {
    visible?:boolean;
    outTime?:number;
    transparent?:boolean;
    interactive?:boolean;
    center?:boolean;
    autoOverflow?:boolean;
    onClose?:()=> void;
}
