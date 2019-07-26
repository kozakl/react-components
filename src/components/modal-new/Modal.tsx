import {
    Children, FunctionComponent, PureComponent,
    ReactElement, useEffect, useState
} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.pcss';
import {useLocation, useMatchMedia} from "@kozakl/hooks";
import {useOpenNav} from "../nav/hooks";
import Spinner from "../spinner/Spinner";

const Modal:FunctionComponent<Props> = (props)=>
{
    var root = document.getElementById('modal-root');
    var modal:HTMLDivElement;
    var visibleDelay:number;
    var activeDelay:number;
    
    const [visible, setVisible] = useState(props.visible),
          [active, setActive] = useState(false);
    
    
    useEffect(()=> {
        modal = document.createElement('div');
        modal.addEventListener('click', onClickModal);
        
        if (this.state.visible) {
            this.root.appendChild(this.modal);
            this.activeDelay = window.setTimeout(()=>
                this.setState({active: true}), 20);
        }
    }, []);
    
    
    modal.className = classNames(
        style.modal,
        active && style.active,
        props.interactive && style.interactive,
        props.center && style.center
    );
    return visible &&
        ReactDOM.createPortal(
            React.cloneElement(
                Children.only(props.children) as ReactElement, {
                    active: active,
                    onClose: props.onClose,
                    ...(props.children as ReactElement).props
                }
            ),
            modal
        );
};

Modal.defaultProps = {
    outTime: 0
};

interface Props {
    visible:boolean;
    outTime?:number;
    interactive?:boolean;
    center?:boolean;
    onClose?:()=> void;
}

export default Modal;

/*
export default class Modal extends PureComponent<Props, State>
{
    
    onClickModal = (event:MouseEvent)=>
    {
        if (event.target === event.currentTarget) {
            if (this.props.onClose)
                this.props.onClose();
        }
    };
    
    static getDerivedStateFromProps(nextProps:Props, prevState:State)
    {
        if (nextProps.visible === prevState.visible)
            return null;
        if (nextProps.visible) {
            return {
                visible: true
            }
        } else {
            return {
                active: false
            }
        }
    }
    
    componentDidUpdate(prevProps:Props)
    {
        if (!prevProps.visible && this.props.visible) {
            clearTimeout(this.visibleDelay);
            clearTimeout(this.activeDelay);
            this.setBodyOverflowY('hidden');
            this.root.appendChild(this.modal);
            this.activeDelay = window.setTimeout(()=>
                this.setState({active: true}), 20);
        }
        else if (prevProps.visible && !this.props.visible)
        {
            clearTimeout(this.visibleDelay);
            clearTimeout(this.activeDelay);
            this.visibleDelay = window.setTimeout(()=> {
                this.setBodyOverflowY('unset');
                this.setState({visible: false});
                this.root.removeChild(this.modal);
            }, this.props.outTime);
        }
    }
    
    setBodyOverflowY(overflow:string) {
        document.body.style.overflowY = overflow;
    };
    
    componentWillUnmount()
    {
        clearTimeout(this.activeDelay);
        clearTimeout(this.visibleDelay);
        
        this.modal.removeEventListener('click', this.onClickModal);
        if (this.modal.parentElement)
            this.root.removeChild(this.modal);
    }
    
    render()
    {
        
    }
}

interface State {
    visible:boolean;
    active:boolean;
}
