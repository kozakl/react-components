import {ArrowDown, ArrowLeft, ArrowRight,
        ArrowUp, CaretDown, CaretLeft,
        CaretRight, CaretUp, ChevronDown,
        ChevronLeft, ChevronRight, ChevronUp,
        CircleCheck, CircleDownload, CircleMinus,
        CirclePlus, CircleURL, CircleXMark, URL,
        XMark} from '@kozakl/components/icons'
import style from './Icons.module.css';

const Icons = ()=> {
    return ( 
        <div className={style.icons}>
            <div>
                <ArrowUp height="1.5em"/>
                <span>arrow-up</span>
            </div>
            <div>
                <ArrowDown height="1.5em"/>
                <span>arrow-down</span>
            </div>
            <div>
                <ArrowLeft height="1.5em"/>
                <span>arrow-left</span>
            </div>
            <div>
                <ArrowRight height="1.5em"/>
                <span>arrow-right</span>
            </div>
            <div>
                <CaretUp height="1.5em"/>
                <span>caret-up</span>
            </div>
            <div>
                <CaretDown height="1.5em"/>
                <span>caret-down</span>
            </div>
            <div>
                <CaretLeft height="1.5em"/>
                <span>caret-left</span>
            </div>
            <div>
                <CaretRight height="1.5em"/>
                <span>caret-right</span>
            </div>
            <div>
                <ChevronUp height="1.5em"/>
                <span>chevron-up</span>
            </div>
            <div>
                <ChevronDown height="1.5em"/>
                <span>chevron-down</span>
            </div>
            <div>
                <ChevronLeft height="1.5em"/>
                <span>chevron-left</span>
            </div>
            <div>
                <ChevronRight height="1.5em"/>
                <span>chevron-right</span>
            </div>
            <div>
                <CircleCheck height="1.5em"/>
                <span>circle-check</span>
            </div>
            <div>
                <CircleDownload height="1.5em"/>
                <span>circle-download</span>
            </div>
            <div>
                <CircleMinus height="1.5em"/>
                <span>circle-minus</span>
            </div>
            <div>
                <CirclePlus height="1.5em"/>
                <span>circle-plus</span>
            </div>
            <div>
                <CircleURL height="1.5em"/>
                <span>circle-url</span>
            </div>
            <div>
                <CircleXMark height="1.5em"/>
                <span>circle-xmark</span>
            </div>
            <div>
                <URL height="1.5em"/>
                <span>url</span>
            </div>
            <div>
                <XMark height="1.5em"/>
                <span>xmark</span>
            </div>
        </div>
    );
};

export default Icons;
