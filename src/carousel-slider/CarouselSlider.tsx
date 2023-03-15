import {Children, FunctionComponent,
        PropsWithChildren, ReactNode,
        useRef, useState} from 'react';
import {useLoad, useResize,
        useTimeout, useVisibility} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {IconButton} from '../icon-button';
import {useTheme} from '../theme';
import React from 'react';
import style from './CarouselSlider.module.css';

const CarouselSlider = (props:Props)=> {
    const load = useLoad(),
          theme = useTheme('carouselSlider'),
          visibility = useVisibility();
    const list = useRef<HTMLDivElement>(),
          [index, setIndex] = useState(0);
    
    useResize(()=> {
        if (props.moveBlock) {
            list.current.scrollLeft = list.current.clientWidth * index;
        } else {
            list.current.style.setProperty('--padding-left', listPaddingLeft() + 'px');
            list.current.style.setProperty('--padding-right', listPaddingRight() + 'px');
        }
    }, true);
    
    useTimeout(()=> {
        if (props.moveBlock) {
            const currentIndex = (index + 1) %
                Math.ceil(list.current.scrollWidth / list.current.clientWidth);
            list.current.scrollLeft = list.current.clientWidth * currentIndex;
            setIndex(currentIndex);
        } else {
            const width = list.current.scrollWidth -
                listPaddingLeft() -
                listPaddingRight();
            const count = (props.children as ReactNode[]).length;
            list.current.scrollLeft = width / count * ((index + 1) % count);
        }
    },
        load &&
        visibility &&
        props.speed,
        [index]);
    
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
                style.carouselSlider,
                theme.carouselSlider,
                props.className
            )}>
            <div
                className={style.list}
                ref={list}
                onScroll={()=> {
                    if (!props.moveBlock) {
                        const width = list.current.scrollWidth -
                            listPaddingLeft() -
                            listPaddingRight();
                        const count = (props.children as ReactNode[]).length,
                              currentDot = list.current.scrollLeft / width * count  + 0.5 | 0;
                        if (currentDot != index) {
                            setIndex(currentDot);
                        }
                    }
                }}>
                {props.children}
            </div>
            {props.arrows &&
                <nav className={theme.arrows}>
                    <IconButton
                        disabled={index <= 0}
                        onClick={()=> {
                            const currentIndex = index > 0 ? 
                                index - 1 :
                                index;
                            list.current.scrollLeft = list.current.clientWidth * currentIndex;
                            setIndex(currentIndex);
                        }}>
                        <props.iconPrev/>
                    </IconButton>
                        <IconButton
                            disabled={
                                index >= Math.round(list.current?.scrollWidth / list.current?.clientWidth) - 1}
                            onClick={()=> {
                                const currentIndex = index <
                                    Math.ceil(list.current.scrollWidth / list.current.clientWidth) - 1 ?
                                    index + 1 :
                                    index;
                                list.current.scrollLeft = list.current.clientWidth * currentIndex;
                                setIndex(currentIndex);
                            }}>
                        <props.iconNext/>
                    </IconButton>
                </nav>}
            {props.dots && !props.moveBlock &&
                <nav
                    className={theme.dots}
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
                    {Children.count(props.children) > 1 &&
                        Children.map(props.children, (child, dotIndex)=>
                            <div
                                className={theme.dotContainer}
                                id={dotIndex.toString()}>
                                <div
                                    className={classNames(
                                        theme.dot,
                                        dotIndex == index &&
                                            theme.active
                                    )}/>
                            </div>)}
                </nav>}
        </div>
    );
};

CarouselSlider.defaultProps = {
    speed: 5000
};

interface Props extends PropsWithChildren {
    className?:string;
    speed?:number;
    arrows?:boolean;
    dots?:boolean;
    moveBlock?:boolean;
    iconPrev?:FunctionComponent;
    iconNext?:FunctionComponent;
}

export default CarouselSlider;
