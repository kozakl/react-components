import {ArrowDown, ArrowLeft, ArrowRight,
        ArrowBottomLeft, ArrowBottomRight,
        ArrowTopLeft, ArrowTopRight, ArrowUp,
        CaretDown, CaretLeft, CaretRight,
        CaretUp, ChevronDown, ChevronLeft,
        ChevronRight, ChevronUp, CircleCheck,
        CircleDownload, CircleMinus, CirclePlus,
        CircleRightFromBracket, CircleURL,
        CircleUser, CircleXMark, Eye, Pen,
        Trash, TrashArrowRight, TrashClock,
        URL, Wait, XMark} from '@kozakl/components/icons'
import {Layout} from '../../components/layout';
import style from './Icons.module.css';

const Icons = ()=> {
    return (
        <Layout title="Icons - React Components">
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
                    <ArrowTopLeft height="1.5em"/>
                    <span>arrow-top-left</span>
                </div>
                <div>
                    <ArrowTopRight height="1.5em"/>
                    <span>arrow-top-right</span>
                </div>
                <div>
                    <ArrowBottomLeft height="1.5em"/>
                    <span>arrow-bottom-left</span>
                </div>
                <div>
                    <ArrowBottomRight height="1.5em"/>
                    <span>arrow-bottom-right</span>
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
                    <CircleRightFromBracket height="1.5em"/>
                    <span>circle-right-from-bracket</span>
                </div>
                <div>
                    <CircleURL height="1.5em"/>
                    <span>circle-url</span>
                </div>
                <div>
                    <CircleUser height="1.5em"/>
                    <span>circle-user</span>
                </div>
                <div>
                    <CircleXMark height="1.5em"/>
                    <span>circle-xmark</span>
                </div>
                <div>
                    <Eye height="1.5em"/>
                    <span>eye</span>
                </div>
                <div>
                    <Pen height="1.5em"/>
                    <span>pen</span>
                </div>
                <div>
                    <Trash height="1.5em"/>
                    <span>trash</span>
                </div>
                <div>
                    <TrashArrowRight height="1.5em"/>
                    <span>trash-arrow-right</span>
                </div>
                <div>
                    <TrashClock height="1.5em"/>
                    <span>trash-clock</span>
                </div>
                <div>
                    <URL height="1.5em"/>
                    <span>url</span>
                </div>
                <div>
                    <Wait height="1.5em"/>
                    <span>wait</span>
                </div>
                <div>
                    <XMark height="1.5em"/>
                    <span>xmark</span>
                </div>
            </div>
        </Layout>
    );
};

export default Icons;
