import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

const Loading = (props:Props)=> {
    const theme = useTheme('loading');
    return (
        <div
            className={classNames(
                theme.loading,
                props.className
            )}
            style={{width: props.size}}>
            <div
                className={classNames(
                    theme.wrapper,
                    props.background &&
                        theme.background,
                )}
                style={{background: props.background}}>
                <svg className={theme.svg} viewBox="0 0 60 60">
                    <circle
                        className={theme.circle}
                        stroke={props.color}
                        cx="30"
                        cy="30"
                        r="25"/>
                </svg>
            </div>
        </div>
    );
};

Loading.defaultProps = {
    color: '#BDBDBD',
    size: '3.75em'
};

interface Props {
    className?:string;
    background?:string;
    color?:string;
    size?:string;
}

export default Loading;
