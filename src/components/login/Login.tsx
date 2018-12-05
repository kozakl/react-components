import * as React from 'react';
import * as style from './Login.pcss';
import {ChangeEvent, FormEvent,
        PureComponent} from 'react';
import {Button, Input} from 'reactstrap';
import {isEmail, isFill} from '@kozakl/utils/validate';

export default class Login extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
    }
    
    onSubmit = (event:FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();
        this.props.onLogin();
    };
    
    onChangeEmail = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({email: event.target.value});
    };
    
    onChangePassword = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({password: event.target.value});
    };
    
    render()
    {
        const enabled = isEmail(this.state.email) &&
                        isFill(this.state.password);
        return (
            <div className={style.login}>
                <h5 className={style.headline}>
                    Logowanie
                </h5>
                
                <form onSubmit={this.onSubmit}>
                    <Input
                        className={style.username}
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        placeholder="Email"
                        bsSize="sm"/>
                    <Input
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        type="password"
                        placeholder="Password"
                        bsSize="sm"/>
                    
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
    onLogin:()=> void;
}

interface State {
    email:string;
    password:string;
}
