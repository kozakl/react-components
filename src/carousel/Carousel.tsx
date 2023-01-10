import {Children, FunctionComponent,
        ReactNode, useRef, useState} from 'react';
import {useResize} from '@kozakl/hooks/useResize';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';
import style from './Carousel.module.css';

const Carousel:FunctionComponent<Props> = (props)=> {
    const theme = useTheme('carousel');
    const list = useRef<HTMLDivElement>(),
          [dot, setDot] = useState(0);
    
    useResize(()=> {
        list.current.style.paddingLeft = listPaddingLeft() + 'px';
        list.current.style.paddingRight = listPaddingRight() + 'px';
    }, true);
    
    function listPaddingLeft() {
        return list.current.clientWidth * 0.5 -
            (list.current.firstChild as HTMLElement).clientWidth * 0.5;
    }
    
    function listPaddingRight() {
        return list.current.clientWidth * 0.5 -
            (list.current.lastChild as HTMLElement).clientWidth * 0.5;
    }
    
    return (
        <div
            className={classNames(
                style.carousel,
                theme.carousel,
                props.className
            )}>
            <div
                className={style.list}
                ref={list}
                onScroll={()=> {
                    const width = list.current.scrollWidth -
                        listPaddingLeft() -
                        listPaddingRight();
                    const count = (props.children as ReactNode[]).length,
                          currentDot = list.current.scrollLeft / width * count  + 0.5 | 0;
                    if (currentDot != dot) {
                        setDot(currentDot);
                    }
                }}>
                {props.children}
            </div>
            <div
                className={theme.indicator}
                onClick={(event)=> {
                    const dot = parseFloat((event.target as HTMLSpanElement).id);
                    if (!isNaN(dot)) {
                        const width = list.current.scrollWidth -
                            listPaddingLeft() -
                            listPaddingRight();
                        const count = (props.children as ReactNode[]).length;
                        list.current.scrollLeft = width / count * dot;
                    }
                }}>
                {Children.map(props.children, (child, index)=>
                    <div
                        className={theme.dotContainer}
                        id={index.toString()}>
                        <div
                            className={classNames(
                                theme.dot,
                                dot == index &&
                                    theme.active
                            )}/>
                    </div>)}
            </div>
        </div>
    );
};

interface Props {
    className?:string;
}

export default Carousel;
