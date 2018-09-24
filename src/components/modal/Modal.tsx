import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as style from './Modal.pcss';
import classNames from '@kozakl/utils/classNames';
import {PureComponent, ReactElement} from 'react';

export default class Modal extends PureComponent<Props, State>
{
    public static defaultProps:Partial<Props> = {
        outTime: 0
    };
    private root = document.getElementById('modal');
    private container:HTMLDivElement;
    private visibleDelay:number;
    private activeDelay:number;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            visible: props.visible,
            active: false
        };
        this.container = document.createElement('div');
    }
    
    componentDidMount()
    {
        if (this.state.visible) {
            this.root.appendChild(this.container);
            this.activeDelay = window.setTimeout(()=>
                this.setState({active: true}), 20);
        }
    }
    
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
            this.root.appendChild(this.container);
            this.activeDelay = window.setTimeout(()=>
                this.setState({active: true}), 20);
        }
        else if (prevProps.visible && !this.props.visible)
        {
            clearTimeout(this.visibleDelay);
            clearTimeout(this.activeDelay);
            this.visibleDelay = window.setTimeout(()=> {
                this.setState({visible: false});
                this.root.removeChild(this.container);
            }, this.props.outTime);
        }
    }
    
    componentWillUnmount()
    {
        clearTimeout(this.activeDelay);
        clearTimeout(this.visibleDelay);
        if (this.container.parentElement)
            this.root.removeChild(this.container);
    }
    
    render()
    {
        this.container.className = classNames(
            style.container,
            this.state.active && style.active,
            this.props.interactive && style.interactive,
            this.props.center && style.center
        );
        return this.state.visible &&
            ReactDOM.createPortal(
                React.cloneElement(
                    this.props.children as ReactElement<State>,
                    this.state
                ),
                this.container
            );
    }
}

interface Props {
    visible:boolean;
    outTime?:number;
    interactive?:boolean;
    center?:boolean;
}

interface State {
    visible:boolean;
    active:boolean;
}
