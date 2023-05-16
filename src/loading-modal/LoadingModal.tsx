import {classNames} from '@kozakl/utils';
import {Loading} from '../loading';
import {withModal} from '../modal';
import {useTheme} from '../theme';
import React from 'react';

const LoadingModal = (props:Props)=> {
    const theme = useTheme('loadingModal');
    return (
        <Loading
            className={classNames(
                theme.loadingModal,
                props.active &&
                    theme.show
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
