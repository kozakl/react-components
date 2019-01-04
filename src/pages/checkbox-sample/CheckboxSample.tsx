import {PureComponent} from 'react';
import {Checkbox} from '../../components/checkbox';
import React from 'react';
import style from './CheckboxSample.pcss';

export default class CheckboxSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            checkbox1: true,
            checkbox2: false,
            checkbox3: false
        };
    }
    
    onChangeCheckbox1 = ()=> {
        this.setState({checkbox1: !this.state.checkbox1});
    };
    
    onChangeCheckbox2 = ()=> {
        this.setState({checkbox2: !this.state.checkbox2});
    };
    
    onChangeCheckbox3 = ()=> {
        this.setState({checkbox3: !this.state.checkbox3});
    };
    
    render()
    {
        return (
            <div className={style.checkboxSample}>
                <Checkbox
                    className={style.checkbox1}
                    checked={this.state.checkbox1}
                    onChange={this.onChangeCheckbox1}>
                    Checked option
                </Checkbox>
                <Checkbox
                    className={style.checkbox2}
                    checked={this.state.checkbox2}
                    onChange={this.onChangeCheckbox2}>
                    Unchecked option
                </Checkbox>
                <Checkbox
                    className={style.checkbox3}
                    checked={this.state.checkbox3}
                    onChange={this.onChangeCheckbox3}
                    error="Error message">
                    Error checkbox
                </Checkbox>
                <Checkbox className={style.checkbox4} disabled>
                    Disabled checkbox
                </Checkbox>
            </div>
        );
    }
}

interface State {
    checkbox1:boolean;
    checkbox2:boolean;
    checkbox3:boolean;
}
