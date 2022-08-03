import {Toast} from './toast';
import {useToastsState} from '@kozakl/states';
import React from 'react';
import style from './Toasts.module.css';

export const Toasts = ()=> {
    const toasts = useToastsState().get();
    return (
        <div className={style.toasts}>
            {toasts.map((toast)=>
                <Toast
                    className={style.toast}
                    key={toast.id}
                    {...toast}/>)}
        </div>
    );
};

export default Toasts;
