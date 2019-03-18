import {FormEvent, FunctionComponent,
        MouseEvent, useState} from 'react';
import {classNames} from '@kozakl/utils';
import {isFill} from '@kozakl/utils/validate';
import {Checkbox} from '../../components/checkbox';
import {Modal} from '../../components/modal';
import {TextField} from '../../components/text-field';
import React from 'react';
import style from './Sidebar2.pcss';
import {useCheckboxChange, useTextFieldControl} from "../../hooks";

const Sidebar2:FunctionComponent<Props> = (props)=>
{
    const name = useTextFieldControl('');
    const tel = useTextFieldControl('', (value)=> !isNaN(+value));
    const statement = useCheckboxChange(false);
    const [terms, setTerms] = useState(false);
    const [errorName, setErrorName] = useState(null);
    const [errorTel, setErrorTel] = useState(null);
    const [errorStatement, setErrorStatement] = useState(null);
    
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
            setErrorName('Prosze podaj imie');
        } else {
            validate = false;
            setErrorName(null);
        }
        if (!isFill(tel.value)) {
            setErrorTel('Prosze podaj telefon');
        } else if (tel.value.length != 9) {
            setErrorTel('Nie poprawny numer');
        } else {
            validate = false;
            setErrorTel(null);
        }
        if (!statement.checked) {
            setErrorStatement('Musisz zakceptować regulamin');
        } else {
            validate = false;
            setErrorStatement(null);
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
                    error={errorName}
                    placeholder="Imie"
                    {...name}/>
                <TextField
                    className={style.tel}
                    maxLength={9}
                    error={errorTel}
                    type="tel"
                    placeholder="Telefon (9 cyfr)"
                    {...tel}/>
                
                <Checkbox
                    className={style.statement}
                    error={errorStatement}
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
