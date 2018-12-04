import * as React from 'react';
import * as style from './AudioPlayer.pcss';
import {clamp} from '@kozakl/utils/math';

export default class AudioPlayer extends React.PureComponent<Props, State>
{
    private bar:HTMLSpanElement;
    private audio:HTMLAudioElement;
    private drag = false;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            paused: true,
            percent: 0
        };
    }
    
    componentDidMount()
    {
        const audio = this.audio = document.createElement('audio');
        audio.addEventListener('timeupdate', this.onUpdateAudio);
        audio.addEventListener('ended', this.onEndAudio);
        audio.src = 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3';
        audio.load();
        
        document.addEventListener('mouseup', this.onUp);
        document.addEventListener('mousemove', this.onMove);
    }
    
    onUpdateAudio = ()=>
    {
        if (!this.drag)
            this.setState({percent: this.audio.currentTime * 100 / this.audio.duration});
    };
    
    onEndAudio = ()=> {
        this.setState({paused: true, percent: 0});
    };
    
    onUp = (event:MouseEvent)=>
    {
        if (this.drag) {
            const rect = this.bar.getBoundingClientRect(),
                  percent = clamp((event.clientX - rect.left) / rect.width, 0, 1);
            this.audio.currentTime = this.audio.duration * percent;
        }
        this.drag = false;
    };
    
    onMove = (event:MouseEvent)=>
    {
        if (this.drag) {
            const rect = this.bar.getBoundingClientRect(),
                  percent = clamp((event.clientX - rect.left) / rect.width, 0, 1) * 100;
            this.setState({percent});
        }
    };
    
    onClickControl = ()=>
    {
        if (this.audio.paused)
            this.audio.play();
        else
            this.audio.pause();
        
        this.setState({paused: this.audio.paused});
    };
    
    onDownBar = (event:React.MouseEvent<HTMLSpanElement>)=>
    {
        this.drag = true;
        
        const rect = this.bar.getBoundingClientRect(),
              percent = clamp((event.nativeEvent.clientX - rect.left) / rect.width, 0, 1) * 100;
        this.setState({percent});
    };
    
    render()
    {
        return (
            <div className={this.props.className}>
                <span className={style.control} onClick={this.onClickControl}>
                    {this.state.paused ? '\ue901' : '\ue900'}
                </span>
                <span className={style.bar} ref={(bar:HTMLSpanElement)=> this.bar = bar}
                      onMouseDown={this.onDownBar}>
                    <span className={style.progress} style={{width: this.state.percent + '%'}}/>
                </span>
            </div>
        );
    }
    
    componentWillUnmount()
    {
        document.removeEventListener('mouseup', this.onUp);
        document.removeEventListener('mousemove', this.onMove);
        
        this.audio.removeEventListener('timeupdate', this.onUpdateAudio);
        this.audio.removeEventListener('ended', this.onEndAudio);
        this.audio.pause();
        this.audio = null;
    }
}

interface Props {
    className?:string;
}

interface State {
    paused:boolean;
    percent:number;
}
