import {CSSProperties, MouseEventHandler,
        PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

const IconButton = (props:Props)=> {
    const theme = useTheme('iconButton');
    return (
        <button
            className={classNames(
                theme.iconButton,
                props.className,
                props.active &&
                    theme.active
            )}
            title={props.title}
            type={props.type}
            style={props.style}
            disabled={props.disabled}
            onClick={props.onClick}
            {...props.dataAttributes}
            {...props.ariaAttributes}>
            {props.children}
        </button>
    );
};

IconButton.defaultProps = {
    type: 'button'
}

interface Props extends PropsWithChildren<{}> {
    className?:string;
    title?:string;
    type?:'button' | 'submit' | 'reset';
    style?:CSSProperties;
    active?:boolean;
    disabled?:boolean;
    dataAttributes?: {
        [attribute: `data-${string}`]:string | number | boolean
    };
    ariaAttributes?: {
        [attribute: `aria-${string}`]:string | number | boolean
    };
    onClick?:MouseEventHandler<HTMLButtonElement>;
}

export default IconButton;
