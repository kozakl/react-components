import {PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {ResponsiveImage} from '../responsive-image';
import React from 'react';
import style from './CrossfadeBg.pcss';

export default class CrossfadeBg extends PureComponent<Props, State>
{
    private nextDelay:number;
    private swapDelay:number;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            current: 0,
            next: null,
            loadedNext: false
        };
    }
    
    componentDidMount() {
        this.nextDelay = window.setTimeout(this.nextImage, 5000);
    }
    
    nextImage = ()=>
    {
        if (this.state.current < this.props.images.length - 1)
            this.setState({next: this.state.current + 1, loadedNext: false});
        else
            this.setState({next: 0, loadedNext: false});
    };
    
    onLoadNext = ()=>
    {
        this.setState({loadedNext: true});
        
        this.swapDelay = window.setTimeout(()=> {
            this.setState({current: this.state.next}, ()=>
                this.swapDelay = window.setTimeout(()=>
                    this.setState({next: null}), 20));
        }, 1250);
        this.nextDelay = window.setTimeout(this.nextImage, 5000);
    };
    
    componentWillUnmount()
    {
        clearTimeout(this.nextDelay);
        clearTimeout(this.swapDelay);
    }
    
    render()
    {
        const nextClass = classNames(
            style.next,
            this.state.loadedNext && style.show
        );
        return (
            <div className={this.props.className}>
                <ResponsiveImage
                    className={style.current}
                    ratio={1280 / 1920}
                    thumb={`${this.props.images[this.state.current]}/thumb.jpg`}
                    srcSet={`${this.props.images[this.state.current]}/992w.jpg 661w,
                             ${this.props.images[this.state.current]}/1200w.jpg 960w,
                             ${this.props.images[this.state.current]}/1366w.jpg 1366w,
                             ${this.props.images[this.state.current]}/1920w.jpg 1920w`}/>
                {this.props.images[this.state.next] &&
                    <ResponsiveImage
                        className={nextClass}
                        ratio={1280 / 1920}
                        thumb={`${this.props.images[this.state.next]}/thumb.jpg`}
                        srcSet={`${this.props.images[this.state.next]}/992w.jpg 661w,
                                 ${this.props.images[this.state.next]}/1200w.jpg 960w,
                                 ${this.props.images[this.state.next]}/1366w.jpg 1366w,
                                 ${this.props.images[this.state.next]}/1920w.jpg 1920w`}
                        onLoadThumb={this.onLoadNext}/>}
            </div>
        );
    }
}

interface Props {
    className?:string;
    images:string[];
}

interface State {
    current:number;
    next:number;
    loadedNext:boolean;
}
