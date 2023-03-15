import {cloneElement, FunctionComponent,
        PropsWithChildren, ReactNode,
        useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useLoad, useTimeout, useVisibility} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {IconButton} from '../icon-button';
import {useTheme} from '../theme';
import React from 'react';
import style from './CarouselTransition.module.css';

const CarouselTransition = (props:Props)=> {
    const load = useLoad(),
          theme = useTheme('carouselTransition'),
          visibility = useVisibility();
    const [elements, setElements] = useState({transition: {}, index: 0});
    
    useTimeout(()=> {
        setElements({
            transition: props.transitionNext,
            index: (elements.index + 1) % children.length
        });
    },
        load &&
        visibility &&
        props.speed,
        [elements.index]);
    
    const children = props.children as ReactNode[];
    return (
        <div
            className={classNames(
                style.carouselTransition,
                theme.carouselTransition,
                props.className
            )}>
            <div>
                <div className={style.element}>
                    <TransitionGroup
                        childFactory={(child)=>
                            cloneElement(child, {classNames: elements.transition})}>
                        <CSSTransition<null>
                            classNames={elements.transition}
                            key={`${elements.index}`}
                            addEndListener={(node:HTMLElement, complete:()=> void)=>
                                node.addEventListener('transitionend', complete, false)}>
                            {children[elements.index]}
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
            {children.length > 1 &&
                <nav className={theme.nav}>
                    <IconButton
                        className={theme.prev}
                        onClick={()=> {
                            setElements({
                                transition: props.transitionPrev,
                                index: (elements.index - 1 + children.length) % children.length
                            });
                        }}>
                        <props.iconPrev/>
                    </IconButton>
                    <IconButton
                        className={theme.next}
                        onClick={()=> {
                            setElements({
                                transition: props.transitionNext,
                                index: (elements.index + 1) % children.length
                            });
                        }}>
                        <props.iconNext/>
                    </IconButton>
                </nav>}
        </div>
    );
};

CarouselTransition.defaultProps = {
    speed: 5000
};

interface Props extends PropsWithChildren {
    className?:string;
    speed?:number;
    transitionPrev:{};
    transitionNext:{};
    iconPrev:FunctionComponent;
    iconNext:FunctionComponent;
}

export default CarouselTransition;
