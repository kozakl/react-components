import * as React from 'react';
import * as style from './ImagePreview.pcss';
import {PureComponent} from 'react';
import {scaleDown} from '@kozakl/utils';
import {ResponsiveImage} from '../responsive-image';
import {Image} from '../../types';

export default class ImagePreview extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            current: props.current
        };
    }
    
    onClickPrev = ()=>
    {
        if (this.state.current > 0)
            this.setState({current: this.state.current - 1});
        else
            this.setState({current: this.props.images.length - 1});
    };
    
    onClickNext = ()=>
    {
        if (this.state.current < this.props.images.length - 1)
            this.setState({current: this.state.current + 1});
        else 
            this.setState({current: 0});
    };
    
    render()
    {
        const image = this.props.images[this.state.current];
        const scale = scaleDown(
            image.width / image.height,
            window.innerWidth,
            window.innerHeight
        );
        return (
            <div className={style.imagePreview} style={{width: `${scale.x * 0.85}px`}}>
                <a className={style.close} onClick={this.props.onClose}>
                    <img src={require('res/icons/close.svg')}/>
                </a>
                <div className={style.imageContainer}>
                    <ResponsiveImage
                        ratio={image.height / image.width}
                        thumb={`${image.path}/thumb.jpg`}
                        srcSet={`${image.path}/425w.jpg 425w,
                                 ${image.path}/768w.jpg 768w,
                                 ${image.path}/1024w.jpg 1024w,
                                 ${image.path}/1440w.jpg 1440w,
                                 ${image.path}/1920w.jpg 1920w`}
                        sizes="85vw"/>
                    <div className={style.arrows}>
                        <a className={style.prev} onClick={this.onClickPrev}>
                            <img src={require('res/icons/prev.svg')}/>
                        </a>
                        <a className={style.next} onClick={this.onClickNext}>
                            <img src={require('res/icons/next.svg')}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

interface Props {
    images:Image[];
    current:number;
    onClose?:()=> void;
}

interface State {
    current:number;
}
