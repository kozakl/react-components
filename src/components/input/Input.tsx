import * as React from 'react';
import * as style from './Input.pcss';
import {classNames} from '@kozakl/utils';
import {InputHTMLAttributes} from "react";
import {PureComponent} from "react";

export default class Modal extends PureComponent<Props, State>
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
        const {name, type, placeholder, onChange} = this.props;
        
        const inputClass = classNames(
            this.props.className,
            style.input
        );
        const fieldClass = classNames(
            style.field,
            this.props.error && style.error
        );
        const placeholderClass = classNames(
            style.placeholder,
            this.state.focus && style.min
        );
        
        return (
            <div
                className={inputClass}
                onFocus={this.onFocus}
                onBlur={this.onBlur}>
                {this.props.placeholder &&
                    <div className={placeholderClass}>
                        {this.props.placeholder}
                    </div>}
                
                <input
                    className={fieldClass}
                    {...{name, type, onChange}}/>
                
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
    error?:string;
}

interface State {
    focus:boolean;
}
