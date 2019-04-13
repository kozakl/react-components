import {Children, FunctionComponent,
        MouseEvent, ReactNode,
        useRef, useState} from 'react';
import {useResize} from '@kozakl/hooks/useResize';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Carousel.pcss';

const Carousel:FunctionComponent<Props> = (props)=>
{
    const list = useRef<HTMLDivElement>(),
          [dot, setDot] = useState(0);
    
    useResize(()=> {
        list.current.style.paddingLeft = listPaddingLeft() + 'px';
        list.current.style.paddingRight = listPaddingRight() + 'px';
    }, true);
    
    function onScrollList()
    {
        const width = list.current.scrollWidth -
                      listPaddingLeft() -
                      listPaddingRight(),
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
                          listPaddingLeft() -
                          listPaddingRight(),
                  count = (props.children as ReactNode[]).length;
            list.current.scrollLeft = width / count * dot;
        }
    }
    
    function listPaddingLeft() {
        return list.current.clientWidth * 0.5 -
            (list.current.firstChild as HTMLElement).clientWidth * 0.5;
    }
    
    function listPaddingRight() {
        return list.current.clientWidth * 0.5 -
            (list.current.lastChild as HTMLElement).clientWidth * 0.5;
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

interface Props {
    className?:string;
}

export default Carousel;
