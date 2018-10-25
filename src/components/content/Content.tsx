import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';
import {SpinnerSample} from '../../pages/spinner-sample';
import {AudioPlayer} from '../audio-player-';

export default class Content extends PureComponent<Props>
{
    onClick = ()=>
    {
        console.log(this.props.message);
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <AudioPlayer/>
            </div>
        );
    }
}

interface Props {
    message:string;
}
