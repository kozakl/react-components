import {Children, PureComponent,
        ReactElement} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.pcss';

export default class Modal extends PureComponent<Props, State>
{
    public static defaultProps:Partial<Props> = {
        outTime: 0
    };
    private root = document.getElementById('modal-root');
    private modal:HTMLDivElement;
    private visibleDelay:number;
    private activeDelay:number;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            visible: props.visible,
            active: false
        };
        this.modal = document.createElement('div');
        this.modal.addEventListener('click', this.onClickModal);
    }
    
    componentDidMount()
    {
        if (this.state.visible) {
            this.root.appendChild(this.modal);
            this.activeDelay = window.setTimeout(()=>
                this.setState({active: true}), 20);
        }
    }
    
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
        this.modal.className = classNames(
            style.modal,
            this.state.active && style.active,
            this.props.interactive && style.interactive,
            this.props.center && style.center
        );
        return this.state.visible &&
            ReactDOM.createPortal(
                React.cloneElement(
                    Children.only(this.props.children) as ReactElement, {
                        active: this.state.active.toString(),
                        onClose: this.props.onClose,
                        ...(this.props.children as ReactElement).props
                    }
                ),
                this.modal
            );
    }
}

interface Props {
    visible:boolean;
    outTime?:number;
    interactive?:boolean;
    center?:boolean;
    onClose?:()=> void;
}

interface State {
    visible:boolean;
    active:boolean;
}
