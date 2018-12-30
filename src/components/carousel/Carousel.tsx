import {Children, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Carousel.pcss';

export default class Carousel extends PureComponent<Props, State>
{
    private paddingLeft:number;
    private paddingRight:number;
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
    
    componentDidMount() {
        this.updateListPadding();
    }
    
    onClickIndicator = (event:MouseEvent)=>
    {
        const listWidth = this.list.scrollWidth - this.paddingLeft - this.paddingRight,
              count = Children.count(this.props.children);
        this.list.scrollLeft = listWidth / count * +event.target.id;
    };
    
    onResize = ()=> {
        this.updateListPadding();
    };
    
    updateListPadding()
    {
        this.paddingLeft = this.list.clientWidth * 0.5 -
                           this.list.firstChild.clientWidth * 0.5;
        this.paddingRight = this.list.clientWidth * 0.5 -
                            this.list.lastChild.clientWidth * 0.5;
        this.list.style.paddingLeft = this.paddingLeft + 'px';
        this.list.style.paddingRight = this.paddingRight + 'px';
    }
    
    render()
    {
        return (
            <div>
                <div
                    className={style.list}
                    ref={(list)=> this.list = list}>
                    {this.props.children}
                </div>
                <div
                    className={style.indicator}
                    onClick={this.onClickIndicator}>
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
