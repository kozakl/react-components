import * as React from 'react';
import * as style from './ResponsiveImageSample.pcss';
import {PureComponent} from 'react';
import {ResponsiveImage} from '../../components/responsive-image-beta';

export default class ResponsiveImageSample extends PureComponent<Props, State>
{
    private images:Images = {
        'assets/room1': {width: 4104, height: 2310},
        'assets/room2': {width: 1200, height: 900}
    };
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            start: false,
            path: 'assets/room1'
        };
    }
    
    onStart = ()=> {
        this.setState({start: true});
    };
    
    onClick = ()=> {
        this.setState({path: 'assets/room2'});
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <button onClick={this.onStart}>on start</button>
                <button onClick={this.onClick}>on load</button>
                {this.state.start && 
                    <div>
                        <ResponsiveImage
                            className={style.image}
                            ratio={this.images[this.state.path].height /
                                   this.images[this.state.path].width}
                            thumb={`${this.state.path}_thumb.jpg`}
                            srcSet={`${this.state.path}_700w.jpg 700w,
                                     ${this.state.path}_525w.jpg 525w,
                                     ${this.state.path}_400w.jpg 400w,
                                     ${this.state.path}_1400w-2x.jpg 1400w`}
                            sizes="(max-width: 700px) 700px,
                                   (max-width: 1050px) 525px,
                                   400px"/>
                    </div>}
            </div>
        );
    }
}

export interface Images {
    [key:string]: {
        width:number;
        height:number;
    }
}

interface Props { }

interface State {
    path:string;
}
