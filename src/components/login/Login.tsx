import {ChangeEvent, FormEvent,
        PureComponent} from 'react';
import {Button, FormFeedback,
        Input, InputGroup} from 'reactstrap';
import {classNames} from '@kozakl/utils';
import {isEmail, isFill} from '@kozakl/utils/validate';
import React from 'react';
import style from './Login.pcss';

export default class Login extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            errorEmail: null,
            errorPassword: null
        };
    }
    
    onSubmit = (event:FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();
        if (this.state.password === 'abc') {
            this.props.onLogin();
        } else
            this.setState({errorPassword: 'Incorrect password'});
    };
    
    onChangeEmail = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({email: event.target.value});
    };
    
    onChangePassword = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({
            password: event.target.value,
            errorPassword: null
        });
    };
    
    render()
    {
        const loginClass = classNames(
            style.login,
            this.props.className
        );
        const enabled = isEmail(this.state.email) &&
                        isFill(this.state.password);
        return (
            <div className={loginClass}>
                <h5 className={style.headline}>
                    Logowanie
                </h5>
                
                <form onSubmit={this.onSubmit}>
                    <InputGroup className={style.email}>
                        <Input
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            placeholder="Email"
                            bsSize="sm"/>
                    </InputGroup>
                    <InputGroup className={style.password}>
                        <Input
                            value={this.state.password}
                            invalid={!!this.state.errorPassword}
                            onChange={this.onChangePassword}
                            type="password"
                            placeholder="Password"
                            bsSize="sm"/>
                        <FormFeedback>
                            {this.state.errorPassword}
                        </FormFeedback>
                    </InputGroup>
                    
                    <Button
                        className={style.confirm}
                        disabled={!enabled}
                        type="submit"
                        color="success"
                        size="sm">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

interface Props {
    className?:string;
    onLogin:()=> void;
}

interface State {
    email:string;
    password:string;
    errorEmail:string;
    errorPassword:string;
}
