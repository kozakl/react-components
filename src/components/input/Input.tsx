import * as React from 'react';
import * as style from './Input.pcss';
import {InputHTMLAttributes, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';

export default class Input extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            focus: false
        };
    }
    
    onFocus = ()=> {
        this.setState({focus: true});
    };
    
    onBlur = ()=> {
        this.setState({focus: false});
    };
    
    render()
    {
        const inputClass = classNames(
            this.props.className,
            style.input
        );
        const textClass = classNames(
            style.text,
            this.props.error && style.error
        );
        const placeholderClass = classNames(
            style.placeholder,
            this.state.focus && style.open,
            this.props.value &&
            this.props.value.length && style.open
        );
        return (
            <div
                className={inputClass}
                onFocus={this.onFocus}
                onBlur={this.onBlur}>
                <input
                    className={textClass}
                    value={this.props.value}
                    onChange={this.props.onChange}/>
                
                {this.props.placeholder &&
                    <div className={placeholderClass}>
                        {this.props.placeholder}
                    </div>}
                {this.props.error &&
                    <div className={style.error}>
                        {this.props.error}
                    </div>}
            </div>
        );
    }
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?:string;
    value?:string;
    error?:string;
}

interface State {
    focus:boolean;
}
