import * as React from 'react';
import * as style from './Typewriter.pcss';
import {PureComponent} from 'react';
import {classNames} from '@kozakl/utils';

export default class Typewriter extends PureComponent<Props, State>
{
    public static defaultProps = {
        delay: 0
    };
    private delay:number;
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            start: false
        };
    }
    
    componentDidMount()
    {
        this.delay = window.setTimeout(()=>
            this.setState({start: true}), this.props.delay);
    }
    
    componentWillUnmount()
    {
        clearTimeout(this.delay);
    }
    
    render()
    {
        const typewriterClass = classNames(
            this.props.className,
            style.typewriter,
            this.state.start && style.show
        );
        return (
            <div className={typewriterClass}>
                {this.props.children}
            </div>
        );
    }
}

interface Props {
    className?:string;
    delay?:number;
}

interface State {
    start:boolean;
}
