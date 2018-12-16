import * as React from 'react';
import * as style from './Sidebar2.pcss';
import {ChangeEvent, FormEvent,
        MouseEvent, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Checkbox} from '../checkbox';
import {Input} from '../input';
import {Modal} from '../modal';

export default class Sidebar2 extends PureComponent<Props, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            terms: false,
            name: '',
            tel: '',
            errorName: null,
            errorTel: null,
            errorStatement: null
        };
    }
    
    onSubmit = (event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        
        this.setState({
            errorName: 'Prosze podaj imie',
            errorTel: 'Prosze podaj telefon'
        });
    };
    
    onChangeName = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({name: event.target.value});
    };
    
    onChangeTel = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({tel: event.target.value});
    };
    
    onClickTerms = (event:MouseEvent)=> {
        event.preventDefault();
        this.setState({terms: true});
    };
    
    onCloseTerms = ()=> {
        this.setState({terms: false});
    };
    
    render()
    {
        const sidebar2Class = classNames(
            style.sidebar2,
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
                    <Input
                        className={style.name}
                        value={this.state.name}
                        error={this.state.errorName}
                        onChange={this.onChangeName}
                        placeholder="Imie"/>
                    <Input
                        className={style.tel}
                        value={this.state.tel}
                        error={this.state.errorTel}
                        onChange={this.onChangeTel}
                        placeholder="Telefon (9 cyfr)"/>
                    
                    <Checkbox className={style.statement}>
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
                    <div className={style.terms}>
                        Regulamin
                    </div>
                </Modal>
            </div>
        );
    }
}

interface Props {
    active?:boolean;
    onClose?:()=> void;
}

interface State {
    name:string;
    tel:string;
    terms:boolean;
    errorName:string;
    errorTel:string;
    errorStatement:string;
}
