import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {AudioPlayerSample} from '../../pages/audio-player-sample';
import {BadgeSample} from '../../pages/badge-sample';
import {Carousel} from '../../components/carousel';
import {CheckboxSample} from '../../pages/checkbox-sample';
import {CrossfadeBgSample} from '../../pages/crossfade-bg-sample';
import {DialogSample} from '../../pages/dialog-sample';
import {ImagePreviewSample} from '../../pages/image-preview-sample';
import {InputSample} from '../../pages/input-sample';
import {LoginSample} from '../../pages/login-sample';
import {ModalSample} from '../../pages/modal-sample';
import {NavSample} from '../../pages/nav-sample';
import {ResponsiveImageSample} from '../../pages/responsive-image-sample';
import {SidebarSample} from '../../pages/sidebar-sample';
import {Sidebar2Sample} from '../../pages/sidebar2-sample';
import {SpinnerSample} from '../../pages/spinner-sample';
import {Window1Sample} from '../../pages/window1-sample';
import React from 'react';

export default function Content()
{
    return (
        <Carousel>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>xxxx</div>
            <div>PHP</div>
        </Carousel>
    );
}
