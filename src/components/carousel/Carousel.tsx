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
    }
    
    onClick = (event:MouseEvent)=>
    {
        this.list.scrollLeft = 500;
        console.log(this.props.children)
    };
    
    render()
    {
        return (
            <div onClick={this.onClick}>
                <div
                    className={style.list}
                    ref={(list)=> this.list = list}>
                    {this.props.children}
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
