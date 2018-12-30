import {Children, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Carousel.pcss';

export default class Carousel extends PureComponent<Props, State>
{
    private list:any;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            current: 0,
            next: null,
            loadedNext: false
        };
        
        window.addEventListener('resize', this.onResize);
    }
    
    componentDidMount()
    {
        
    }
    
    onClick = (event:MouseEvent)=>
    {
        const offset = (this.list.scrollWidth - this.state.paddingLeft - this.state.paddingRight) /
            (this.props.children.length ) * (Number(event.target.id) );
        
        this.list.scrollLeft = offset;
    };
    
    onResize = (event:MouseEvent)=>
    {
        const paddingLeft = this.list.clientWidth * 0.5 -
                            this.list.firstChild.clientWidth * 0.5,
              paddingRight = this.list.clientWidth * 0.5 -
                             this.list.lastChild.clientWidth * 0.5;
        this.list.style.paddingLeft = paddingLeft + 'px';
        this.list.style.paddingRight = paddingRight + 'px';
    };
    
    render()
    {
        console.log('render', this.list);
        
        return (
            <div>
                <div
                    className={style.list}
                    ref={(list)=> this.list = list}>
                    {this.props.children}
                </div>
                <div className={style.indicator} onClick={this.onClick}>
                    {Children.map(this.props.children, (child, index)=> {
                        return <span className={style.indicatorDot} id={index.toString()}/>
                    })}
                </div>
            </div>
        );
    }
}

interface Props {
    className?:string;
}

interface State {
    current:number;
    next:number;
    loadedNext:boolean;
}
