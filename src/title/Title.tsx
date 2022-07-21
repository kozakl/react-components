import {FunctionComponent} from 'react';
import React from 'react';

const Title:FunctionComponent<Props> = (props)=>
{
    return (
        <span title={props.title || props.children.toString()}>
            {props.children}
        </span>
    );
};

interface Props {
    title?:string;
}

export default Title;
