import * as React from 'react';
import * as style from './ResponsiveImage.pcss';
import {PureComponent} from 'react';

export default class ResponsiveImage extends PureComponent<Props, State>
{
    private empty = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            thumb: props.thumb,
            init: false,
            loadedThumb: false
        };
    }
    
    onLoadThumb = ()=>
    {
        if (!this.state.init) {
            this.setState({init: true});
        } else if (!this.state.loadedThumb) {
            if (this.props.onLoadThumb)
                this.props.onLoadThumb();
            
            this.setState({loadedThumb: true});
        }
    };
    
    static getDerivedStateFromProps(props:Props, state:State)
    {
        if (props.thumb === state.thumb)
            return null;
        return {
            thumb: props.thumb,
            loadedThumb: false
        };
    }
    
    render()
    {
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className={style.wrapper}
                     style={{'paddingTop': `${this.props.ratio * 100}%`}}>
                    <img
                        className={style.image}
                        src={this.state.init ? this.state.thumb : this.empty}
                        srcSet={this.state.loadedThumb ? this.props.srcSet : ''}
                        sizes={this.state.loadedThumb ? this.props.sizes : ''}
                        onLoad={this.onLoadThumb}/>
                </div>
            </div>
        );
    }
}

interface Props {
    className?:string;
    id?:string;
    ratio:number;
    thumb:string;
    srcSet:string;
    sizes?:string;
    onLoadThumb?:()=> void;
}

interface State {
    thumb:string;
    init:boolean;
    loadedThumb:boolean;
}
