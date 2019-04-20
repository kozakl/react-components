import {Typewriter} from '../../components/typewriter';
import React from 'react';
import style from './TypewriterSample.pcss';

export default function TypewriterSample()
{
    return (
        <div className={style.textFieldSample}>
            <Typewriter delay={1000}>
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
                <span>O</span>
                <span>O</span>
                <span>O</span>
                <span>O</span>
            </Typewriter>
        </div>
    );
}
