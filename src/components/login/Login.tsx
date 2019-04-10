import {FormEvent, FunctionComponent} from 'react';
import {Button, FormFeedback,
        Input, InputGroup} from 'reactstrap';
import {useTextFieldControl} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {isEmail, isFill} from '@kozakl/utils/validate';
import React from 'react';
import style from './Login.pcss';

export const Login:FunctionComponent<Props> = (props)=>
{
    const email = useTextFieldControl(''),
          password = useTextFieldControl('');
    
    function onSubmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        if (password.value === 'abc') {
            props.onLogin();
        } else {
            email.setError('Incorrect email');
            password.setError('Incorrect password');
        }
    }
    
    function onChangeForm() {
        email.setError(null);
        password.setError(null);
    }
    
    const enabled = isEmail(email.value) &&
                    isFill(password.value);
    const loginClass = classNames(
        style.login,
        props.className
    );
    return (
        <div className={loginClass}>
            <h5 className={style.headline}>
                Logowanie
            </h5>
            
            <form onSubmit={onSubmit} onChange={onChangeForm}>
                <InputGroup className={style.email}>
                    <Input
                        value={email.value}
                        invalid={!!email.error}
                        onChange={email.onChange}
                        placeholder="Email"
                        bsSize="sm"/>
                    <FormFeedback>
                        {email.error}
                    </FormFeedback>
                </InputGroup>
                <InputGroup className={style.password}>
                    <Input
                        value={password.value}
                        invalid={!!password.error}
                        onChange={password.onChange}
                        type="password"
                        placeholder="Password"
                        bsSize="sm"/>
                    <FormFeedback>
                        {password.error}
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
