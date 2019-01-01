import {Children, MouseEvent,
        PureComponent, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Carousel.pcss';

export default class Carousel extends PureComponent<Props, State>
{
    private list:HTMLDivElement;
    private paddingLeft:number;
    private paddingRight:number;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            dot: 0
        };
        
        window.addEventListener('resize', this.onResize);
    }
    
    componentDidMount() {
        this.updateListPadding();
    }
    
    onScrollList = ()=>
    {
        const width = this.list.scrollWidth -
                      this.paddingLeft - this.paddingRight,
              count = (this.props.children as ReactNode[]).length,
              dot = this.list.scrollLeft / width * count + 0.5 | 0;
        if (this.state.dot !== dot) {
            this.setState({dot});
        }
    };
    
    onClickIndicator = (event:MouseEvent<HTMLDivElement>)=>
    {
        const dot = parseFloat((event.target as HTMLSpanElement).id);
        if (!isNaN(dot)) {
            const width = this.list.scrollWidth -
                          this.paddingLeft - this.paddingRight,
                  count = (this.props.children as ReactNode[]).length;
            this.list.scrollLeft = width / count * dot;
            
        }
    };
    
    onResize = ()=> {
        this.updateListPadding();
    };
    
    setListRef = (list:HTMLDivElement)=> {
        this.list = list;
    };
    
    updateListPadding()
    {
        this.paddingLeft = this.list.clientWidth * 0.5 -
                           (this.list.firstChild as HTMLElement).clientWidth * 0.5;
        this.paddingRight = this.list.clientWidth * 0.5 -
                            (this.list.firstChild as HTMLElement).clientWidth * 0.5;
        this.list.style.paddingLeft = this.paddingLeft + 'px';
        this.list.style.paddingRight = this.paddingRight + 'px';
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    
    render()
    {
        return (
            <div
                className={this.props.className}
                onScroll={this.onScrollList}>
                <div className={style.list} ref={this.setListRef}>
                    {this.props.children}
                </div>
                <div
                    className={style.indicator}
                    onClick={this.onClickIndicator}>
                    {Children.map(this.props.children, (child, index)=> {
                        const dotClass = classNames(
                            style.dot,
                            this.state.dot === index &&
                                style.active
                        );
                        return (
                            <div className={style.dotWrapper} id={index.toString()}>
                                <div className={dotClass}/>
                            </div>
                        );
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
    dot:number;
}
