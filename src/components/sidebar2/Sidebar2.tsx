import {FormEvent, FunctionComponent,
        MouseEvent, useState} from 'react';
import {useCheckboxControl,
        useTextFieldControl} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {isFill} from '@kozakl/utils/validate';
import {Checkbox} from '../checkbox';
import {Modal} from '../modal';
import {TextField} from '../text-field';
import React from 'react';
import style from './Sidebar2.pcss';

const Sidebar2:FunctionComponent<Props> = (props)=>
{
    const name = useTextFieldControl(''),
          tel = useTextFieldControl('', (value)=> !isNaN(+value)),
          statement = useCheckboxControl(false);
    const [terms, setTerms] = useState(false);
    
    function onSubmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        
        if (validateForm()) {
            
        }
    }
    
    function onClickTerms(event:MouseEvent) {
        event.preventDefault();
        setTerms(true);
    }
    
    function onCloseTerms() {
        setTerms(false);
    }
    
    function validateForm()
    {
        let validate = true;
        if (!isFill(name.value)) {
            name.setError('Prosze podaj imie');
        } else {
            validate = false;
            name.setError(null);
        }
        if (!isFill(tel.value)) {
            tel.setError('Prosze podaj telefon');
        } else if (tel.value.length != 9) {
            tel.setError('Nie poprawny numer');
        } else {
            validate = false;
            tel.setError(null);
        }
        if (!statement.checked) {
            statement.setError('Musisz zakceptować regulamin');
        } else {
            validate = false;
            statement.setError(null);
        }
        
        return validate;
    }
    
    const sidebar2Class = classNames(
        style.sidebar2,
        props.className,
        props.active && style.active
    );
    return (
        <div className={sidebar2Class}>
            <a className={style.close} onClick={props.onClose}>
                <img src={require('res/icons/close.svg')}/>
            </a>
            <h3 className={style.headline}>
                Porozmawiaj z ekspertem
            </h3>
            <div className={style.info}>
                Podaj nam swoje imię i numer telefonu. Oddzwonimy.
            </div>
            <form onSubmit={onSubmit}>
                <TextField
                    className={style.name}
                    placeholder="Imie"
                    {...name}/>
                <TextField
                    className={style.tel}
                    maxLength={9}
                    type="tel"
                    placeholder="Telefon (9 cyfr)"
                    {...tel}/>
                
                <Checkbox
                    className={style.statement}
                    {...statement}>
                    Oświadczam że zapoznałem się z&nbsp;
                    <a className={style.terms} onClick={onClickTerms}>
                        regulaminem
                    </a>&nbsp;
                    i akceptuję...
                </Checkbox>
                <button
                    className={style.send}
                    type="submit">
                    Wyślij
                </button>
            </form>
            <Modal visible={terms} onClose={onCloseTerms}>
                <div>
                    Regulamin
                </div>
            </Modal>
        </div>
    );
};

interface Props {
    className?:string;
    active?:boolean;
    onClose?:()=> void;
}

export default Sidebar2;
