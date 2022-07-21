import {classNames} from '@kozakl/utils';
import {Loading} from '../loading';
import {withModal} from '../modal';
import React from 'react';
import style from './SpinnerModal.module.css';

const LoadingModal = (props:Props)=>
{
    return (
        <Loading
            className={classNames(
                style.loading,
                props.active && style.show
            )}
            background={'var(--background-secondary)'}/>
    );
};

interface Props {
    active?:boolean;
}

export default withModal(LoadingModal, {
    outTime: 250,
    transparent: true,
    autoOverflow: false
});
