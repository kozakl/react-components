import {PropsWithChildren} from 'react';
import React from 'react';

const Title = (props:Props)=> {
    return (
        <span title={props.title || props.children.toString()}>
            {props.children}
        </span>
    );
};

interface Props extends PropsWithChildren<{}> {
    title?:string;
}

export default Title;
