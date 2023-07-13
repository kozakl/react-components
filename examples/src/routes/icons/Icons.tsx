import {ArrowDown, ArrowLeft, ArrowRight,
        ArrowBottomLeft, ArrowBottomRight,
        ArrowTopLeft, ArrowTopRight, ArrowUp,
        CaretDown, CaretLeft, CaretRight,
        CaretUp, ChevronDown, ChevronLeft,
        ChevronRight, ChevronUp, CircleArrowRight,
        CircleCart, CircleCheck, CircleDownload,
        CircleMinus, CirclePlus, CircleRightFromBracket,
        CircleURL, CircleUser, CircleXMark,
        Eye, Menu, Moon, Pen, Sun, Trash,
        TrashArrowRight, TrashClock, URL,
        Wait, XMark} from '@kozakl/components/icons'
import {Layout} from '../../components/layout';
import style from './Icons.module.css';

const Main = ()=> {
    return (
        <Layout title="Icons - React Components">
            <div className={style.main}>
                <div>
                    <div>
                        <ArrowUp height="1.5em" colorPrimary="white" outline={2} colorSecondary="red" strokeLinecap="round"/>
                    </div>
                    <span>arrow-up</span>
                </div>
                <div>
                    <div><ArrowDown height="6em" colorPrimary="white" outline={2} colorSecondary="red" strokeLinecap="round"/></div>
                    <span>arrow-down</span>
                </div>
                <div>
                    <div><ArrowLeft height="3em" margin="-0.75em"/></div>
                    <span>arrow-left</span>
                </div>
                <div>
                    <div><ArrowRight height="1.5em"/></div>
                    <span>arrow-right</span>
                </div>
                <div>
                    <div><ArrowTopLeft height="1.5em"/></div>
                    <span>arrow-top-left</span>
                </div>
                <div>
                    <div><ArrowTopRight height="1.5em"/></div>
                    <span>arrow-top-right</span>
                </div>
                <div>
                    <div><ArrowBottomLeft height="6em" colorPrimary="white" outline={2} colorSecondary="red" strokeLinecap="round"/></div>
                    <span>arrow-bottom-left</span>
                </div>
                <div>
                    <div><ArrowBottomRight height="1.5em"/></div>
                    <span>arrow-bottom-right</span>
                </div>
                <div>
                    <div><CaretUp height="1.5em"/></div>
                    <span>caret-up</span>
                </div>
                <div>
                    <div><CaretDown height="1.5em"/></div>
                    <span>caret-down</span>
                </div>
                <div>
                    <div><CaretLeft height="1.5em"/></div>
                    <span>caret-left</span>
                </div>
                <div>
                    <div><CaretRight height="1.5em"/></div>
                    <span>caret-right</span>
                </div>
                <div>
                    <div><ChevronUp height="1.5em"/></div>
                    <span>chevron-up</span>
                </div>
                <div>
                    <div><ChevronDown height="5em" colorPrimary="white" outline={2} colorSecondary="red" strokeLinecap="round"/></div>
                    <span>chevron-down</span>
                </div>
                <div>
                    <div><ChevronLeft height="1.5em"/></div>
                    <span>chevron-left</span>
                </div>
                <div>
                    <div><ChevronRight height="1.5em"/></div>
                    <span>chevron-right</span>
                </div>
                <div>
                    <div><CircleArrowRight height="1.5em"/></div>
                    <span>circle-arrow-right</span>
                </div>
                <div>
                    <div><CircleCart height="1.5em"/></div>
                    <span>circle-cart</span>
                </div>
                <div>
                    <div><CircleCheck height="1.5em"/></div>
                    <span>circle-check</span>
                </div>
                <div>
                    <div><CircleDownload height="1.5em"/></div>
                    <span>circle-download</span>
                </div>
                <div>
                    <div><CircleMinus height="1.5em"/></div>
                    <span>circle-minus</span>
                </div>
                <div>
                    <div><CirclePlus height="1.5em"/></div>
                    <span>circle-plus</span>
                </div>
                <div>
                    <div><CircleRightFromBracket height="1.5em"/></div>
                    <span>circle-right-from-bracket</span>
                </div>
                <div>
                    <div><CircleURL height="1.5em"/></div>
                    <span>circle-url</span>
                </div>
                <div>
                    <div><CircleUser height="1.5em"/></div>
                    <span>circle-user</span>
                </div>
                <div>
                    <div><CircleXMark height="1.5em"/></div>
                    <span>circle-xmark</span>
                </div>
                <div>
                    <div><Eye height="1.5em"/></div>
                    <span>eye</span>
                </div>
                <div>
                    <div><Menu
                        cross={false}
                        height="1.5em"/>
                    <span>menu</span></div>
                </div>
                <div>
                    <div><Moon height="1.5em"/></div>
                    <span>moon</span>
                </div>
                <div>
                    <div><Pen height="1.5em"/></div>
                    <span>pen</span>
                </div>
                <div>
                    <div><Sun height="1.5em"/></div>
                    <span>sun</span>
                </div>
                <div>
                    <div><Trash height="1.5em"/></div>
                    <span>trash</span>
                </div>
                <div>
                    <div><TrashArrowRight height="1.5em"/></div>
                    <span>trash-arrow-right</span>
                </div>
                <div>
                    <div><TrashClock height="1.5em"/></div>
                    <span>trash-clock</span>
                </div>
                <div>
                    <div><URL height="1.5em"/></div>
                    <span>url</span>
                </div>
                <div>
                    <div><Wait height="1.5em"/></div>
                    <span>wait</span>
                </div>
                <div>
                    <div><XMark height="6em" colorPrimary="white" outline={2} colorSecondary="red" strokeLinecap="round"/></div>
                    <span>xmark</span>
                </div>
            </div>
        </Layout>
    );
};

export default Main;
