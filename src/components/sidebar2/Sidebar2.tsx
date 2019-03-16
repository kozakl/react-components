import {ChangeEvent, FormEvent,
        MouseEvent, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {isFill} from '@kozakl/utils/validate';
import {Checkbox} from '../checkbox';
import {Modal} from '../modal';
import {TextField} from '../text-field';
import React from 'react';
import style from './Sidebar2.pcss';

export default class Sidebar2 extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            name: '',
            tel: '',
            statement: false,
            terms: false,
            errorName: null,
            errorTel: null,
            errorStatement: null
        };
    }
    
    onSubmit = (event:FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();
        
        if (this.validateForm()) {
            
        }
    };
    
    onChangeName = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({name: event.target.value});
    };
    
    onChangeTel = (event:ChangeEvent<HTMLInputElement>)=>
    {
        const tel = event.target.value.trim();
        if (!isNaN(+tel) && tel.length <= 9) {
            this.setState({tel});
        }
    };
    
    onChangeStatement = ()=> {
        this.setState({statement: !this.state.statement});
    };
    
    onClickTerms = (event:MouseEvent)=> {
        event.preventDefault();
        this.setState({terms: true});
    };
    
    onCloseTerms = ()=> {
        this.setState({terms: false});
    };
    
    validateForm()
    {
        let validate = true;
        if (!isFill(this.state.name)) {
            this.setState({errorName: 'Prosze podaj imie'});
        } else {
            validate = false;
            this.setState({errorName: null});
        }
        if (!isFill(this.state.tel)) {
            this.setState({errorTel: 'Prosze podaj telefon'});
        } else if (this.state.tel.length != 9) {
            this.setState({errorTel: 'Nie poprawny numer'});
        } else {
            validate = false;
            this.setState({errorTel: null});
        }
        if (!this.state.statement) {
            this.setState({errorStatement: 'Musisz zakceptować regulamin'});
        } else {
            validate = false;
            this.setState({errorStatement: null});
        }
        
        return validate;
    }
    
    render()
    {
        const sidebar2Class = classNames(
            style.sidebar2,
            this.props.className,
            this.props.active && style.active
        );
        return (
            <div className={sidebar2Class}>
                <a className={style.close} onClick={this.props.onClose}>
                    <img src={require('res/icons/close.svg')}/>
                </a>
                <h3 className={style.headline}>
                    Porozmawiaj z ekspertem
                </h3>
                <div className={style.info}>
                    Podaj nam swoje imię i numer telefonu. Oddzwonimy.
                </div>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        className={style.name}
                        value={this.state.name}
                        error={this.state.errorName}
                        onChange={this.onChangeName}
                        placeholder="Imie"/>
                    <TextField
                        className={style.tel}
                        value={this.state.tel}
                        error={this.state.errorTel}
                        onChange={this.onChangeTel}
                        type="tel"
                        placeholder="Telefon (9 cyfr)"/>
                    
                    <Checkbox
                        className={style.statement}
                        checked={this.state.statement}
                        error={this.state.errorStatement}
                        onChange={this.onChangeStatement}>
                        Oświadczam że zapoznałem się z&nbsp;
                        <a className={style.terms} onClick={this.onClickTerms}>
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
                <Modal visible={this.state.terms} onClose={this.onCloseTerms}>
                    <div>
                        Regulamin
                    </div>
                </Modal>
            </div>
        );
    }
}

interface Props {
    className?:string;
    active?:boolean;
    onClose?:()=> void;
}

interface State {
    name:string;
    tel:string;
    statement:boolean;
    terms:boolean;
    errorName:string;
    errorTel:string;
    errorStatement:string;
}
