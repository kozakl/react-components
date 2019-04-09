import {
    ChangeEvent, FormEvent, FunctionComponent, MouseEvent,
    PureComponent, useState
} from 'react';
import {Button, FormFeedback,
        Input, InputGroup} from 'reactstrap';
import {classNames} from '@kozakl/utils';
import {isEmail, isFill} from '@kozakl/utils/validate';
import React from 'react';
import style from './Login.pcss';

const Sidebar2:FunctionComponent<Props> = (props)=>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    
    function onSubmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        if (password === 'abc') {
            props.onLogin();
        } else {
            setErrorEmail('Incorrect email');
            setErrorPassword('Incorrect password');
        }
    }
    
    function onChangeEmail(event:ChangeEvent<HTMLInputElement>)
    {
        setEmail(event.target.value);
    }
    
    function onChangePassword(event:ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
        setErrorPassword(null);
    }
    
    const loginClass = classNames(
        style.login,
        props.className
    );
    const enabled = isEmail(email) &&
                    isFill(password);
    return (
        <div className={loginClass}>
            <h5 className={style.headline}>
                Logowanie
            </h5>
            
            <form onSubmit={onSubmit}>
                <InputGroup className={style.email}>
                    <Input
                        value={email}
                        invalid={!!errorEmail}
                        onChange={onChangeEmail}
                        placeholder="Email"
                        bsSize="sm"/>
                    <FormFeedback>
                        {errorEmail}
                    </FormFeedback>
                </InputGroup>
                <InputGroup className={style.password}>
                    <Input
                        value={password}
                        invalid={!!errorPassword}
                        onChange={onChangePassword}
                        type="password"
                        placeholder="Password"
                        bsSize="sm"/>
                    <FormFeedback>
                        {errorPassword}
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
};

interface Props {
    className?:string;
    onLogin:()=> void;
}

export default Sidebar2;
