import * as React from 'react';
import * as style from './Spinner.pcss';
import {StatelessComponent} from 'react';

const Spinner:StatelessComponent<Props> = (props)=>
{
    return (
        <div className={style.spinner} style={{width: props.size}}>
            <svg className={style.container} viewBox="0 0 60 60">
                <circle
                    className={style.circle}
                    stroke={props.color}
                    cx="30"
                    cy="30"
                    r="25"/>
            </svg>
        </div>
    );
};

Spinner.defaultProps = {
    color: '#BDBDBD',
    size: '3.75em'
};

interface Props {
    color?:string;
    size?:string;
}

export default Spinner;
