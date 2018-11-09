import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';
import {SpinnerSample} from '../../pages/spinner-sample';
import {AudioPlayerSample} from '../../pages/audio-player-sample';
import {CrossfadeBgSample} from '../../pages/crossfade-bg-sample';
import {ResponsiveImageSample} from '../../pages/responsive-image-sample';
import {Modal} from '../modal';
import {Dialog} from '../dialog/Dialog';
import DialogSample from '../../pages/dialog-sample/DialogSample';

export default class Content extends PureComponent<Props>
{
    onClick = ()=> {
        console.log(this.props.message);
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <CrossfadeBgSample></CrossfadeBgSample>
            </div>
        );
    }
}

interface Props {
    message:string;
}
