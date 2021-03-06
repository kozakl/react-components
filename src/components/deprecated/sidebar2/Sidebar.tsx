import {FormEvent, FunctionComponent,
        MouseEvent, useState} from 'react';
import {useCheckbox, useTextField} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {isFill} from '@kozakl/utils/validate';
import {Checkbox} from './index';
import {Modal} from '../../modal/index';
import {TextField} from './index';
import React from 'react';
import style from './Sidebar.pcss';

const Sidebar:FunctionComponent<Props> = (props)=>
{
    const name = useTextField(''),
          tel = useTextField('', (value)=> !isNaN(+value)),
          statement = useCheckbox(false);
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
            validate = false;
            name.setError('Prosze podaj imie');
        } else {
            name.setError(null);
        }
        if (!isFill(tel.value)) {
            validate = false;
            tel.setError('Prosze podaj telefon');
        } else if (tel.value.length != 9) {
            validate = false;
            tel.setError('Nie poprawny numer');
        } else {
            tel.setError(null);
        }
        if (!statement.checked) {
            validate = false;
            statement.setError('Musisz zakceptować regulamin');
        } else {
            statement.setError(null);
        }
        
        return validate;
    }
    
    const sidebarClass = classNames(
        style.sidebar,
        props.className,
        props.active && style.active
    );
    return (
        <div className={sidebarClass}>
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

export default Sidebar;
