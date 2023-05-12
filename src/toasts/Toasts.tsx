import {useToastsState} from '@kozakl/states';
import {Toast} from './toast';
import {useTheme} from '../theme';
import React from 'react';

export const Toasts = ()=> {
    const theme = useTheme('toasts'),
          toasts = useToastsState().get();
    return (
        <div className={theme.toasts}>
            {toasts.map((toast)=>
                <Toast
                    className={theme.toast}
                    key={toast.id}
                    {...toast}/>)}
        </div>
    );
};

export default Toasts;
