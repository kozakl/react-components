import {FormEvent, FunctionComponent} from 'react';
import {Button, FormFeedback,
        Input, InputGroup} from 'reactstrap';
import {useTextField} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {isEmail, isFill} from '@kozakl/utils/validate';
import React from 'react';
import style from './Login.pcss';

const Login:FunctionComponent<Props> = (props)=>
{
    const email = useTextField(''),
          password = useTextField('');
    
    function onSubmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        if (validateForm())
        {
            if (password.value === 'abc') {
                props.onLogin();
            } else {
                email.setError('Incorrect credentials');
                password.setError('Incorrect credentials');
            }
        }
    }
    
    function validateForm()
    {
        let validate = true;
        if (!isFill(email.value)) {
            validate = false;
            email.setError('Fill email');
        } else if (!isEmail(email.value)) {
            validate = false;
            email.setError('Incorrect email');
        } else {
            email.setError(null);
        }
        if (!isFill(password.value)) {
            validate = false;
            password.setError('Fill password');
        } else {
            password.setError(null);
        }
        
        return validate;
    }
    
    const loginClass = classNames(
        style.login,
        props.className
    );
    return (
        <div className={loginClass}>
            <h5 className={style.headline}>
                Logowanie
            </h5>
            
            <form onSubmit={onSubmit}>
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

export default Login;
