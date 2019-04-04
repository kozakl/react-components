import {Children, FunctionComponent,
        MouseEvent, ReactNode,
        useRef, useState} from 'react';
import {classNames} from '@kozakl/utils';
import {paddingLeft, paddingRight} from './helpers/list';
import {useListPadding} from './hooks';
import React from 'react';
import style from './Carousel.pcss';

const Carousel:FunctionComponent<Props> = (props)=>
{
    const list = useRef<HTMLDivElement>(),
          [dot, setDot] = useState(0);
    
    useListPadding(list);
    
    function onScrollList()
    {
        const width = list.current.scrollWidth -
                      paddingLeft(list) -
                      paddingRight(list),
              count = (props.children as ReactNode[]).length,
              currentDot = list.current.scrollLeft / width * count  + 0.5 | 0;
        if (currentDot !== dot) {
            setDot(currentDot);
        }
    }
    
    function onClickIndicator(event:MouseEvent<HTMLDivElement>)
    {
        const dot = parseFloat((event.target as HTMLSpanElement).id);
        if (!isNaN(dot)) {
            const width = list.current.scrollWidth -
                          paddingLeft(list) -
                          paddingRight(list),
                  count = (props.children as ReactNode[]).length;
            list.current.scrollLeft = width / count * dot;
        }
    }
    
    return (
        <div className={props.className}>
            <div
                className={style.list}
                ref={list}
                onScroll={onScrollList}>
                {props.children}
            </div>
            <div
                className={style.indicator}
                onClick={onClickIndicator}>
                {Children.map(props.children, (child, index)=> {
                    const dotClass = classNames(
                        style.dot,
                        dot === index &&
                            style.active
                    );
                    return (
                        <div
                            className={style.dotWrapper}
                            id={index.toString()}>
                            <div className={dotClass}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;

interface Props {
    className?:string;
}
